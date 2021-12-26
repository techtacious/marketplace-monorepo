import { Activity } from '.';

export interface Post {
  _id: string;
  title: string;
  image?: string;
  date?: string;
  startDate?: string;
  endDate?: string;
  caption: string;
  description: string;
  location: {
    lat: number;
    lng: number;
    street?: string;
    city: string;
    country: string;
    postal: string;
  };
}
