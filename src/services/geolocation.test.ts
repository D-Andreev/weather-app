import GeolocationService from './geolocation';

describe('geolocation service', () => {
  let geolocation: Geolocation;
  let coordinates: GeolocationCoordinates;
  let position: GeolocationPosition;
  let service: GeolocationService;

  beforeEach(() => {
    geolocation = {} as Geolocation;
    coordinates = {accuracy: 0, altitude: 0, altitudeAccuracy: 0, heading: 0, speed: 0, longitude: 1, latitude: 1};
    position = {coords: coordinates, timestamp: 0};
    service = new GeolocationService(geolocation);
  });

  describe('getCurrentPosition', () => {
    describe('when user allows browser to use location', () => {
      it('resolves with coordinates', async () => {
        const mockGeolocation = {
          getCurrentPosition: jest.fn()
            .mockImplementationOnce((success) => Promise.resolve(success(position)))
        };
        service = new GeolocationService(mockGeolocation as any);

        const res = await service.getCurrentPosition();

        expect(res).toEqual(coordinates);
      });
    });

    describe('when user does not allow browser to use location', () => {
      it('rejects with error', async () => {
        const mockGeolocation = {
          getCurrentPosition: jest.fn()
            .mockImplementationOnce((success, error) => Promise.resolve(error('test')))
        };
        service = new GeolocationService(mockGeolocation as any);

        try {
          await service.getCurrentPosition();

          // Fail test if above expression doesn't throw anything.
          expect(true).toBe(false);
        } catch (e: any) {
          expect(e).toEqual('test');
        }
      });
    });
  });
});

export {}
