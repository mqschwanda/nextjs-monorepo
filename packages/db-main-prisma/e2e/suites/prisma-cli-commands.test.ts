import { PrismaManager } from '@mqs/db-main-prisma';
import { PrismaClient } from '@prisma/client';
import execa from 'execa';
import type { Options as ExecaOptions } from 'execa';
import { getAndCheckDatabaseDsn } from '../e2e-dsn-services.util';

describe('prisma cli commands', () => {
  let databaseDsn = '';
  beforeAll(async () => {
    databaseDsn = await getAndCheckDatabaseDsn();
  });
  describe('yarn prisma db create and seed', () => {
    it('should load seed data in a newly created db', async () => {
      const dsn = databaseDsn;

      const options: ExecaOptions = {
        // encoding: 'utf-8',
        shell: true,
        env: {
          ...process.env,
          PRISMA_DATABASE_URL: dsn,
        },
      };

      const createResult = await execa('yarn prisma db push', options);

      expect(createResult.exitCode).toStrictEqual(0);
      expect(createResult.stdout).toMatch(
        /your database is now in sync with your schema/i
      );

      const seedResult = await execa('yarn prisma db seed', options);

      expect(seedResult.exitCode).toStrictEqual(0);
      expect(seedResult.stdout).toMatch(/seeding finished/i);

      const prisma = PrismaManager.getDevSafeInstance('test', () => {
        return new PrismaClient({
          datasources: {
            db: {
              url: dsn,
            },
          },
        });
      });

      const post = await prisma.post.findFirst();
      expect(post).toBeDefined();
    });
  });
});
