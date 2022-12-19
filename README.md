# weather-app

An application that uses OpenWeatherAPI (http://openweathermap.org/forecast5) to show a 5 day weather forecast.

## Local development
* Clone the repo
* `npm i`
* Get an api key from https://openweathermap.org/
* Create a `.env` file with following content:
  * VITE_WEATHER_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  * VITE_WEATHER_API_BASE_URL=https://api.openweathermap.org
* `npm run dev` to start the development server
* Open your browser to localhost and port from the console output (usually `http://localhost:5173/`)

## Build
Run `npm run build` to build for production

## Tests
* `npm run test` to run tests

## Future improvements
This app was built for 1 working day. There are several things that can be added/improved:
* Display detailed weather data for a particular day by clicking on the day tile
* Although the grid with tiles is readable on very large and very small resolutions, UX can be improved quite a bit.
* There are some unit tests for the services and utils, but more can be added, for example for the components with react-testing-library.
