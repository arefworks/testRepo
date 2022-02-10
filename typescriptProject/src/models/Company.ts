import faker from 'faker';
import { location } from './location';

export class Company {
  name: string;
  catchPhrase: string;
  location: location;

  /**
   * Company constructor
   */
  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = new location();
  }
}
