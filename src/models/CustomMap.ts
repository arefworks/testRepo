import { location } from './location';

export class CustomMap {
  private map: google.maps.Map;
  constructor(DivId: string) {
    new google.maps.Map(document.getElementById(DivId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarker(location: location): void {
    console.log('add marker');
    console.log('location');
  }
}
