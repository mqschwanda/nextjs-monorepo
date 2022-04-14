import { PrismaClient } from '@prisma/client';
import packageJSON from '../../package.json';
import { PrismaManager } from '../prisma';

const isDevelopment = process.env?.NODE_ENV === 'development';

export type GraphqlContext = {
  prisma: PrismaClient;
};

export const context: GraphqlContext = {
  prisma: PrismaManager.getDevSafeInstance(packageJSON.name, () => {
    const client = new PrismaClient({
      datasources: {
        db: {
          url: process.env?.PRISMA_DATABASE_URL,
        },
      },
      errorFormat: isDevelopment ? 'pretty' : 'colorless',
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

    if (isDevelopment) {
      client.$on('query', (e) => {
        console.log('Query: ' + e.query);
        console.log('Duration: ' + e.duration + 'ms');
      });
    }

    return client;
  }),
};
