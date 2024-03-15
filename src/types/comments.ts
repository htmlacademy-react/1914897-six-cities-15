import { TUserHost } from '../types/user';

export type TComment = {
  id: string;
  date: Date;
  user: TUserHost;
  comment: string;
  rating: number;
};
