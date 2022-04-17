import type { Prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import { poemCreateInputs } from './poem';
import { postCreateInputs } from './post';
import { userCreateInputs } from './user';

const prisma = new PrismaClient();

async function seed() {
  console.log(`Start seeding ...`);
  let user;

  for (const userCreateInput of userCreateInputs) {
    user = await prisma.user.upsert({
      where: { email: userCreateInput.email },
      update: {},
      create: userCreateInput,
    });
    console.log(`Created or updated user with id: ${user.id}`);
  }

  for (const poemCreateInput of poemCreateInputs) {
    const payload: Prisma.PoemCreateInput = {
      ...poemCreateInput,
    };

    await prisma.poem.upsert({
      where: {
        slug: payload.slug,
      },
      update: payload,
      create: payload,
    });
    console.log(`Created or updated poem with slug: ${payload.slug}`);
  }

  for (const postCreateInput of postCreateInputs) {
    const payload: Prisma.PostCreateInput = {
      ...postCreateInput,
      // @ts-expect-error Object literal may only specify known properties, but 'authorId' does not exist in type 'PostCreateInput'
      authorId: user?.id,
    };

    await prisma.post.upsert({
      where: {
        slug: payload.slug,
      },
      update: payload,
      create: payload,
    });
    console.log(`Created or updated post with slug: ${payload.slug}`);
  }
  console.log(`Seeding finished.`);
}

seed()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
