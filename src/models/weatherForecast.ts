export enum Units {
  metric = 'metric',
}

export enum ApiStatusCode {
  success = '200',
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Sys {
  pod: string;
}

export interface WeatherDataEntry {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;
}

export interface Coord {
  lat: number;
  lon: number;
}

export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherDataEntry[];
  city: City;
}

export interface WeatherForecastDay {
  minTemp: number;
  maxTemp: number;
  temp: number;
  feelsLike: number;
  icon: string;
  description: string;
  date: string;
  dayOfWeek: string;
}

export interface WeatherForecast {
  city: string;
  country: string;
  days: WeatherForecastDay[];
}

