import {InMemoryDbService} from 'angular-in-memory-web-api';

export class ActivityData implements InMemoryDbService {
  createDb() {
    const activities: any[] = [
      {
        id: 1,
        title: 'Activity 1',
        overview: 'A small overview of the first activity'
      },
      {
        id: 2,
        title: 'Activity 2',
        overview: 'Another overview of the activity'
      },
      {
        id: 3,
        title: 'Activity 3',
        overview: 'The overview of the activity'
      }
    ];

    return {activities};
  }

}