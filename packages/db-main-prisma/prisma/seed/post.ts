import { unsplashImageURI, loremIpsum } from '@mqs/core-lib/src';
import type { Prisma } from '@prisma/client';
import keywordExtractor from 'keyword-extractor';
import { slugify } from 'transliteration';

export const postCreateInputs: Prisma.PostCreateInput[] = new Array(10)
  .fill(null)
  .map(() => {
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
      content,
      image,
      keywords,
      slug,
      title,
    };
  });
