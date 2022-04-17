import type { Prisma } from '@prisma/client';

export const userCreateInputs: Prisma.UserCreateInput[] = [
  {
    email: 'mqschwanda@gmail.com',
    firstName: 'Mark',
    lastName: 'Schwanda',
    nickname: 'mqschwanda',
  },
];
