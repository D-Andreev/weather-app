import {WeatherForecastDay} from '../../models/weatherForecast';
import DegreesCelsius from '../degrees-celsius/DegreesCelsius';
import {MESSAGE} from '../../constants';

type WeatherDayProps = {
  day: WeatherForecastDay;
}

const WeatherDay = ({day}: WeatherDayProps) => {
  return (
    <div
      className="p-4 border rounded-md border-gray-300 flex flex-col items-center justify-center">
      <div>{day.date}</div>
      <div className="font-bold">{day.dayOfWeek}</div>
      <img src={`https://openweathermap.org/img/w/${day.icon}.png`} alt={day.description}/>
      <div><DegreesCelsius degrees={day.minTemp} /> | <DegreesCelsius degrees={day.maxTemp} /></div>
      <div>{MESSAGE.FEELS_LIKE}: <DegreesCelsius degrees={day.feelsLike} /></div>
      <div>{day.description}</div>
    </div>
  );
}

export default WeatherDay;
