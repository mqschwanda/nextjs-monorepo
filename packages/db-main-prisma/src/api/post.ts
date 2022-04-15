import type { UnPromisify } from '@mqs/core-lib';
import { PrismaModel } from './_base';

export type ReturnPost<Method extends keyof typeof PostModel['prototype']> =
  UnPromisify<ReturnType<typeof PostModel['prototype'][Method]>>;

export type GetPosts = ReturnPost<'getPosts'>;

export class PostModel extends PrismaModel {
  /**
   *
   */
  getPost = async (id: number) => {
    return await this.prisma.post.findUnique({
      where: { id },
      include: { author: true },
    });
  };

  /**
   *
   */
  getPosts = async (options?: { limit?: number; offset?: number }) => {
    const { limit, offset } = options ?? {};
    return await this.prisma.post.findMany({
      skip: offset,
      take: limit,
      where: {
        content: {
          not: undefined,
        },
      },
      include: {
        author: true,
      },
      orderBy: { publishedAt: 'desc' },
    });
  };
}
