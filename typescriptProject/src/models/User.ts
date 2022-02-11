import faker from 'faker';
import { IMarkerable } from './IMarkable';
import { location } from './location';

export class User implements IMarkerable {
  name: string;
  location: location;
  title: string;
  /**
   * User constructor
   */
  constructor() {
    this.name = faker.name.firstName();
    this.location = new location();
    this.title = this.name;
  }
}
