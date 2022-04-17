import { unsplashImageURI, loremIpsum } from '@mqs/core-lib/src';
import type { Prisma } from '@prisma/client';
import keywordExtractor from 'keyword-extractor';
import { slugify } from 'transliteration';

export const poemCreateInputs: Prisma.PoemCreateInput[] = new Array(10)
  .fill(null)
  .map(() => {
    const author = loremIpsum({ count: 2, units: 'words' });
    const title = loremIpsum({ count: 6, units: 'words' });
    const slug = slugify(title);
    const content = loremIpsum({ count: 6, units: 'paragraphs' });
    const keywords = keywordExtractor.extract(title, {
      language: 'english',
      remove_digits: true,
      return_changed_case: true,
      remove_duplicates: true,
    });
    const image = unsplashImageURI({ keywords });

    return {
      author,
      content,
      image,
      slug,
      keywords: {
        create: keywords.map((keyword) => ({
          keyword: {
            connectOrCreate: {
              create: { name: keyword },
              where: { name: keyword },
            },
          },
        })),
      },
      title,
    };
  });
