import { Dispatch } from 'redux';
import { fetchCovidDataAPI } from '../apis/covidApi';
import { ICovidAll } from '../types/covidTypes';
import {
  FETCH_COVID_SUCCESS, FETCH_COVID, FETCH_COVID_FAILED
} from '../constants/covidConstant';

export const fetchCovidSuccess = (data: ICovidAll): any => ({
  data,
  type: FETCH_COVID_SUCCESS,
  error: null,
});

export const fetchCovid = (): any => ({
  type: FETCH_COVID,
  error: null,
});

export const fetchCovidFail = (error: any): any => ({
  data: {},
  type: FETCH_COVID_FAILED,
  error,
});

export const fetchCovidAction = (): ((dispatch: Dispatch<any>) => void) => {
  return (dispatch: Dispatch<any>): void => {
    dispatch(fetchCovid());
    fetchCovidDataAPI().then((data: ICovidAll) => {
      dispatch(fetchCovidSuccess(data));
    })
    .catch((error) => {
      dispatch(fetchCovidFail(error));
    })
  }
};
