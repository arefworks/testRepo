import faker from 'faker';
import { location } from './location';

export class User {
  name: string;
  location: location;

  /**
   * User constructor
   */
  constructor() {
    this.name = faker.name.firstName();
    this.location = new location();
  }
}
