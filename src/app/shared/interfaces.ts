export interface Activity {
  id: number;
  title: string;
  overview: string;
  categoryId?: number;
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
  error?: any;
}
