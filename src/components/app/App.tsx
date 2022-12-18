import WeatherService from '../../services/weather';
import GeolocationService from '../../services/geolocation';
import {WeatherForecastDay} from '../../models/weatherForecast';
import {DAYS_PER_PAGE, MESSAGE} from '../../constants';
import WeatherDay from '../weather-day/WeatherDay';
import useWeatherForecast from './hooks/use-weather-forecast';

type AppProps = {
  weatherService: WeatherService;
  geolocationService: GeolocationService;
};

const App = ({ weatherService, geolocationService }: AppProps) => {
  const {isLoading, data, error} = useWeatherForecast(geolocationService, weatherService);

  if (isLoading) {
    return (
      <div>{MESSAGE.LOADING}</div>
    );
  }

  if (error || !data) {
    return (
      <div>{MESSAGE.ERROR_GETTING_WEATHER}</div>
    );
  }

  return (
    <>
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">{MESSAGE.TITLE}</h1>
      </header>
      <main className="p-4">
        <div className="container mx-auto">
          <div className="flex p4 flex-col mb-2">
            <div className="text-xl font-bold">
              {data.city} / {data.country}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8">
            {data.days.slice(0, DAYS_PER_PAGE).map((day: WeatherForecastDay) => (
              <WeatherDay key={day.date} day={day} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default App;
