import { httpClient } from './httpClient';
import { flightApi } from './flightApi';

export function apiFactory(http) {
  return {
    flights: flightApi(http)
  };
}

const http = httpClient('https://api.spacexdata.com/v3/launches');
export const api = apiFactory(http);
