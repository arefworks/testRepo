import faker from 'faker';
import { IMarkerable } from './IMarkable';
import { location } from './location';

export class Company {
  name: string;
  catchPhrase: string;
  location: location;

  markerContent(): string {
    return `
          <div>
            <h5> Company Name :${this.name}</h5>
            <p> Catch Phrase: ${this.catchPhrase}</p>
          </div>
    `;
  }

  /**
   * Company constructor
   */
  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = new location();
  }
}
