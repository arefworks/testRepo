import faker from 'faker';
import { IMarkerable } from './IMarkable';
import { location } from './location';

export class User {
  name: string;
  location: location;
  title: string;

  markerContent(): string {
    return `
          <div>
            <h5>User Name :${this.name}</h5>
          </div>
    `;
  }
  /**
   * User constructor
   */
  constructor() {
    this.name = faker.name.firstName();
    this.location = new location();
    this.title = this.name;
  }
}
