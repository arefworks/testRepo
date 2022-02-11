import * as faker from 'faker';

export class location {
  lat: number;
  lng: number;

  /**
   *  location constructor
   */
  constructor() {
    this.lat = parseFloat(faker.address.latitude());
    this.lng = parseFloat(faker.address.longitude());
  }
}
