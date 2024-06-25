import { User as PrismaUser } from '@prisma/client';

export class User implements PrismaUser {
  id: number;
  email: string;
  name: string;
  password: string;
  createAt: Date;
  updateAt: Date;
}
