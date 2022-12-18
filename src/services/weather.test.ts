import WeatherService from './weather';
import {WeatherData} from '../models/weatherForecast';
import {weatherDataMock} from '../mocks/weatherData';

describe('weather service', () => {
  let service: WeatherService;

  beforeEach(() => {
    service = new WeatherService('http://localhost/weather-api', '123');
  });

  describe('transformWeatherData', () => {
    describe('when there fetching weather data is not successful', () => {
      it('returns null', async () => {
        expect(service.transformWeatherData({cod: '404'} as WeatherData)).toEqual(null);
      });
    });

    describe('when weather data is fetched', () => {
      it('returns the transformed weather data for five days', () => {
        const res = service.transformWeatherData(weatherDataMock);

        expect(res).toEqual({
          "city": "Sofia",
          "country": "BG",
          "days":  [
            {
              "date": "12/18/2022",
              "dayOfWeek": "Sunday",
              "description": "overcast clouds",
              "feelsLike": 2.13,
              "icon": "04n",
              "maxTemp": 3.83,
              "minTemp": 3.26,
              "temp": 3.45,
            },
            {
              "date": "12/19/2022",
              "dayOfWeek": "Monday",
              "description": "broken clouds",
              "feelsLike": -0.8512500000000001,
              "icon": "04n",
              "maxTemp": 3.7,
              "minTemp": 0.02,
              "temp": 1.6600000000000001,
            },
            {
              "date": "12/20/2022",
              "dayOfWeek": "Tuesday",
              "description": "few clouds",
              "feelsLike": -1.4537499999999999,
              "icon": "02d",
              "maxTemp": 4.1,
              "minTemp": -1.79,
              "temp": 0.37124999999999997,
            },
            {
              "date": "12/21/2022",
              "dayOfWeek": "Wednesday",
              "description": "clear sky",
              "feelsLike": 2.2175,
              "icon": "01n",
              "maxTemp": 6.79,
              "minTemp": -0.55,
              "temp": 2.2175,
            },
            {
              "date": "12/22/2022",
              "dayOfWeek": "Thursday",
              "description": "scattered clouds",
              "feelsLike": 3.35,
              "icon": "04n",
              "maxTemp": 8.87,
              "minTemp": 1.48,
              "temp": 4.0325,
            },
            {
              "date": "12/23/2022",
              "dayOfWeek": "Friday",
              "description": "clear sky",
              "feelsLike": 3.9683333333333337,
              "icon": "01d",
              "maxTemp": 8.55,
              "minTemp": 1.5,
              "temp": 4.446666666666666,
            },
          ],
        });
      });
    });
  });
});
