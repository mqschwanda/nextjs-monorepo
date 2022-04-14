/**
 * Convenience singleton to deal with fast-refresh
 * and connection limits in development mode.
 */
import type { Prisma, PrismaClient } from '@prisma/client';
export type PrismaClientOptions = Prisma.PrismaClientOptions;

declare let global: {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  __PRISMA_INSTANCES__: Record<string, PrismaClient> | undefined;
};

export class PrismaManager {
  private static instances?: Record<string, PrismaClient>;
  private constructor() {}

  /**
   * Create and maintain a prismaClient instance that avoids issues with
   * db connections limit exhaustion in dev mode.
   *
   * In dev mode the prisma instance is kept unique by using a `global` reference
   * preventing issues with Fast-Refresh / Hot-Module-Replacement (HMR) strategies
   *
   * @see {@link https://pris.ly/d/help/next-js-best-practices|Prisma NextJs Best Practices}
   */
  static getDevSafeInstance(
    key: string,
    factory: () => PrismaClient
  ): PrismaClient {
    if (process.env.NODE_ENV === 'production') {
      if (!PrismaManager.instances?.[key]) {
        PrismaManager.instances ??= {};
        PrismaManager.instances[key] = factory();
      }
      return PrismaManager.instances[key];
    } else {
      // PrismaClient is attached to the `global` object in development to prevent
      // exhausting your database connection limit.
      if (!global.__PRISMA_INSTANCES__?.[key]) {
        global.__PRISMA_INSTANCES__ ??= {};
        global.__PRISMA_INSTANCES__[key] = factory();
        console.debug(
          `[PrismaManager global.__PRISMA_INSTANCES__[${key}]]: Dev instance created and preserved globally.`
        );
      }
      return global.__PRISMA_INSTANCES__[key];
    }
  }
}
