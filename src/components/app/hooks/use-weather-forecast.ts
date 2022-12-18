import GeolocationService from '../../../services/geolocation';
import WeatherService from '../../../services/weather';
import {useQuery} from 'react-query';
import {WeatherData} from '../../../models/weatherForecast';
import {REACT_QUERY_KEY} from '../../../constants';
import {useMemo} from 'react';

const useWeatherForecast = (geolocationService: GeolocationService, weatherService: WeatherService) => {
  const query = useQuery<WeatherData, Error>(
    REACT_QUERY_KEY.WEATHER_DATA,
    async () => {
      const coords = await geolocationService.getCurrentPosition();
      return await weatherService.getWeatherData(coords);
    }
  );

  return {
    ...query,
    data: useMemo(
      () => weatherService.transformWeatherData(query.data as WeatherData),
      [query.data]
    ),
  }
}

export default useWeatherForecast;
