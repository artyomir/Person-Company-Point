export interface Mapable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lng: 0,
        lat: 0,
      },
    });
  }

  addMarker(object: Mapable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: object.location.lat,
        lng: object.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: object.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
