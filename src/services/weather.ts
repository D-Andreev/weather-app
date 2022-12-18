import {WeatherData, Units, WeatherForecast, WeatherDataEntry, ApiStatusCode, WeatherForecastDay} from '../models/weatherForecast';
import {formatDate, getAverage, getDayOfWeek, getMode, objectToQs} from '../utils/utils';

export default class WeatherService {
  private collectDayData(dayEntries: WeatherDataEntry[]): WeatherForecastDay {
    let minTemp = Number.MAX_SAFE_INTEGER;
    let maxTemp = Number.MIN_SAFE_INTEGER;
    let temps: number[] = [];
    let feelsLikes: number[] = [];
    let icons: string[] = [];
    let descriptions: string[] = [];

    dayEntries.forEach((dayEntry: WeatherDataEntry) => {
      if (dayEntry.main.temp_min < minTemp) {
        minTemp = dayEntry.main.temp_min;
      }
      if (dayEntry.main.temp_max > maxTemp) {
        maxTemp = dayEntry.main.temp_max;
      }

      feelsLikes.push(dayEntry.main.feels_like);
      temps.push(dayEntry.main.temp);
      icons.push(dayEntry.weather[0].icon);
      descriptions.push(dayEntry.weather[0].description);
    });

    return {
      minTemp,
      maxTemp,
      temp: getAverage(temps),
      feelsLike: getAverage(feelsLikes),
      icon: getMode(icons),
      description: getMode(descriptions),
      date: formatDate(dayEntries[0].dt),
      dayOfWeek: getDayOfWeek(dayEntries[0].dt),
    }
  }
  constructor(private readonly baseUrl: string, private readonly apiKey: string) {}

  async getWeatherData(coordinates: GeolocationCoordinates): Promise<WeatherData> {
    const {latitude, longitude} = coordinates;
    const queryParams = {
      lat: latitude,
      lon: longitude,
      units: Units.metric,
      appid: this.apiKey,
    };
    const qs = objectToQs(queryParams);
    const response = await fetch(`${this.baseUrl}/data/2.5/forecast?${qs}`);
    const data = await response.json();

    return data;
  }

  transformWeatherData(weatherData: WeatherData): WeatherForecast | null {
    if (!weatherData || weatherData.cod !== ApiStatusCode.success) {
      return null;
    }

    const fiveDayForecast = weatherData.list.reduce((acc: {[k: string]: WeatherDataEntry[]}, item) => {
      const date = formatDate(item.dt);
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(item);
      return acc;
    }, {});

    return {
      city: weatherData.city.name,
      country: weatherData.city.country,
      days: Object.values(fiveDayForecast).map(this.collectDayData),
    };
  }
}
