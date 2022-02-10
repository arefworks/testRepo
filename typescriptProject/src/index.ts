/// <reference types="@types/google.maps" />

import { Company } from './models/Company';
import { User } from './models/User';
import { CustomMap } from './models/CustomMap';

const user = new User();

console.log(user);

const company = new Company();

console.log(company);

const map = new CustomMap('map');

map.addMarker({ lat: 0, lng: 1 });
