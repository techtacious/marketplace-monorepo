import { Post } from '.';

export interface Category {
  _id: string;
  name: string;
  image?: string;
  posts?: Post[];
}
