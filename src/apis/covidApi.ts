import axios, {AxiosError, AxiosResponse} from 'axios';
import { ICovidAll } from '../types/covidTypes';

export const fetchCovidDataAPI = (): Promise<ICovidAll> => {
  return axios({
    baseURL: `https://pomber.github.io/covid19/timeseries.json`,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'get',
  })
  .then((response: AxiosResponse) => {
      return Promise.resolve(response.data);
    })
    .catch((error: AxiosError) => {
      return Promise.reject(error);
    })
};
