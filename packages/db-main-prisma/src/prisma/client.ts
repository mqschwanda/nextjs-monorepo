import { Asserts } from '@mqs/core-lib';
import { PrismaClient } from '@prisma/client';
import { PrismaManager } from './manager';

const isDev = process.env?.NODE_ENV === 'development';

export const getPrismaClient: () => PrismaClient = () => {
  const url = process.env?.PRISMA_DATABASE_URL ?? null;
  Asserts.nonEmptyString(
    url,
    () =>
      new Error(
        `[Error] Cannot create prisma client instance, missing env variable PRISMA_DATABASE_URL.`
      )
  );

  return PrismaManager.getDevSafeInstance('db-main', () => {
    const prismaClient = new PrismaClient({
      datasources: {
        db: {
          url: url,
        },
      },
      errorFormat: isDev ? 'pretty' : 'colorless',
      log: [
        {
          level: 'query',
          emit: 'event',
        },
        {
          level: 'error',
          emit: 'stdout',
        },
        {
          level: 'info',
          emit: 'stdout',
        },
        {
          level: 'warn',
          emit: 'stdout',
        },
      ],
    });
    if (isDev) {
      prismaClient.$on('query', (e) => {
        console.log('Query: ' + e.query);
        console.log('Duration: ' + e.duration + 'ms');
      });
    }
    return prismaClient;
  });
};
