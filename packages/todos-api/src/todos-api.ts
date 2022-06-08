import { faker } from '@faker-js/faker';
import { Todo } from './todo';

export class TodosApi {
  getTodo(): Todo {
    return {
      id: faker.datatype.uuid(),
      description: faker.company.catchPhrase(),
      isComplete: faker.datatype.boolean(),
    };
  }
}
