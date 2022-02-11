import { location } from './location';
import { IMarkerable } from './IMarkable';

export class CustomMap {
  private map: google.maps.Map;
  constructor(DivId: string) {
    this.map = new google.maps.Map(document.getElementById(DivId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarker(mark: IMarkerable, title: string = ''): void {
    new google.maps.Marker({
      position: mark.location,
      map: this.map,
      title: title,
    });
  }
}
