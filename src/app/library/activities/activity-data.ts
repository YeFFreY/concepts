import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Activity, ActivityCategory, Skill} from '../../shared/interfaces';

export class ActivityData implements InMemoryDbService {
  createDb() {
    const activities: Activity[] = [
      {
        id: 1,
        title: 'Activity 1',
        overview: 'A small overview of the first activity',
        categoryId: 1
      },
      {
        id: 2,
        title: 'Activity 2',
        overview: 'Another overview of the activity',
        categoryId: 2
      },
      {
        id: 3,
        title: 'Activity 3',
        overview: 'The overview of the activity',
        categoryId: 1
      }
    ];
    const activityCategories: ActivityCategory[] = [
      {
        id: 1,
        name: 'Activity Category 1',
        description: 'The category 1 for activity'
      },
      {
        id: 2,
        name: 'Activity Category 2',
        description: 'The category 2 for activity'
      }
    ];

    const skills: Skill[] = [
      {
        id: 1,
        name: 'Skill 1',
        description: 'The skill 1 is the first skill'
      },
      {
        id: 2,
        name: 'Skill 2',
        description: 'The skill about another thing'
      },
    ];

    return {activities, activityCategories, skills};
  }

}
