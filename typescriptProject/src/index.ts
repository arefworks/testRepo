/// <reference types="@types/google.maps" />

import { Company } from './models/Company';
import { User } from './models/User';
import { CustomMap } from './models/CustomMap';

const user = new User();

console.log(user);

const company = new Company();

console.log(company);

const map = new CustomMap('map');

map.addMarker(user);
map.addMarker(company);
´
console.log('working')