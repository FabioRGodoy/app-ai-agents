import { User } from '@repo/database';
import { Request } from 'express';

export interface AuthRequest extends Request {
  user: User;
}
