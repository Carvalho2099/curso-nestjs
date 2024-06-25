import { Answers } from '@prisma/client';
import { Question } from '../../questions/entities/question.entity';
import { User } from '../../user/entities/user.entity';

export class Answer implements Answers {
  id: number;
  body: string;
  createAt: Date;
  updateAt: Date;
  userId: number;
  questionId: number;
  user: User;
  question: Question;
}
