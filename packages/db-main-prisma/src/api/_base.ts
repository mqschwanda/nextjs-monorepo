import type { PrismaClient } from '@prisma/client';

export class PrismaModel {
  constructor(protected prisma: PrismaClient) {}

  public updatePrismaClient = (client: PrismaClient) => {
    this.prisma = client;
  };
}
