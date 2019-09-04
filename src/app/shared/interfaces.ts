import {DataServiceError} from '../../lib/services.utils';

export interface Activity {
  id: number;
  title: string;
  overview: string;
  categoryId?: number;
  category?: ActivityCategory;
}

export interface ActivityCategory {
  id: number;
  name: string;
  description: string;
}

export interface Skill {
  id: number;
  name: string;
  description: string;
}

export interface ActivityResolved {
  activity: Activity;
  error?: DataServiceError;
}
