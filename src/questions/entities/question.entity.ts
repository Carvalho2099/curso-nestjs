import { Questions } from '@prisma/client';

export class Question implements Questions {
  id: number;
  title: string;
  body: string;
  createAt: Date;
  updateAt: Date;
  userId: number;
}
