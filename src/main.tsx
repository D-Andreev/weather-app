import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import WeatherService from './services/weather';
import GeolocationService from './services/geolocation';
import {QueryClient, QueryClientProvider} from 'react-query';
import './index.css'

const weatherService = new WeatherService(
  import.meta.env.VITE_WEATHER_API_BASE_URL,
  import.meta.env.VITE_WEATHER_API_KEY
);
const geolocationService = new GeolocationService(navigator.geolocation);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App weatherService={weatherService} geolocationService={geolocationService} />
    </QueryClientProvider>
  </React.StrictMode>,
)
