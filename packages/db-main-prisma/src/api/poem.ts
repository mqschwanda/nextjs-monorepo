import type { UnPromisify } from '@mqs/core-lib';
import type { PrismaClient } from '@prisma/client';
import { InternalServerError } from '@tsed/exceptions';

export type GetPoems = UnPromisify<
  ReturnType<typeof PoemSSR['prototype']['getPoems']>
>;

export class PoemSSR {
  constructor(private prisma: PrismaClient) {}

  /**
   * @throws Error
   */
  getPoems = async (options?: { limit?: number; offset?: number }) => {
    const { limit, offset } = options ?? {};
    try {
      return await this.prisma.poem.findMany({
        skip: offset,
        take: limit,
        orderBy: { author: 'desc' },
      });
    } catch (e) {
      throw new InternalServerError(`Poems can't be retrieved`, e);
    }
  };
}
