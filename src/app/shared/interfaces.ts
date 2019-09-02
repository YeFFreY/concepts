export interface Activity {
  id: number;
  title: string;
  overview: string;
}

export interface ActivityResolved {
  activity: Activity;
  error?: any;
}
