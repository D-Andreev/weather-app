export default class GeolocationService {
  constructor(private readonly geolocation: Geolocation) {
  }

  getCurrentPosition(): Promise<GeolocationCoordinates> {
    return new Promise<GeolocationCoordinates>((resolve, reject) => {
      this.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        return resolve(position.coords);
      }, (error) => reject(error));
    });
  }
}
