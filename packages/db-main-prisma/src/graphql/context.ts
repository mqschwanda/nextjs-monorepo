import type { PrismaClient } from '@prisma/client';
import { getPrismaClient } from '../prisma/client';

export type GraphqlContext = {
  prisma: PrismaClient;
};

export const context: GraphqlContext = {
  prisma: getPrismaClient(),
};
