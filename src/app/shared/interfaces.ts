export interface Activity {
  id: number;
  title: string;
  overview: string;
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
