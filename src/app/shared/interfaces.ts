import {DataServiceError} from '../../lib/services.utils';

export interface Activity {
  id?: number;
  details: {
    title: string;
    overview: string;
  };
  categoryId?: number;
  category?: ActivityCategory;
  skills?: Skill[];
}

export function from(id: number = null, title: string = '', overview: string = ''): Activity {
  // arrays might be prepoluted with empty value so always one item is shown in dynamic formArrays
  // like activitySkills: ['']
  return {
    id,
    details: {
      title,
      overview
    }
  };
}

export interface ActivityCategory {
  id?: number;
  name: string;
  description: string;
}

export interface Skill {
  id?: number;
  name: string;
  description: string;
}

export interface ActivityResolved {
  activity: Activity;
  error?: DataServiceError;
}
