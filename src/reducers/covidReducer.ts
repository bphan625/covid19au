import {IDefaultCovidState} from '../types/covidTypes';
import {
  FETCH_COVID_SUCCESS, FETCH_COVID, FETCH_COVID_FAILED
} from '../constants/covidConstant';


const defaultState = {
  data: {
    Australia: [
      {
        date: "2020-1-22",
        confirmed: 0,
        deaths: 0,
        recovered: 0,
      }
    ]
  },
  isFetchingCovid: false,
  error: null,
};

const convidReducer = (state: IDefaultCovidState = defaultState, action: any): any => {
  const { type, data, error } = action;

  Object.freeze(state);

  const newState = Object.assign({}, state);

  switch (type) {
    case FETCH_COVID:
      return Object.assign({}, newState, { isFetchingCovid: true });
    case FETCH_COVID_SUCCESS:
      return Object.assign({}, newState, { data, isFetchingCovid: false });
    case FETCH_COVID_FAILED:
      return Object.assign({}, newState, { isFetchingCovid: false, error });
    default:
      return newState;
  }
};

export default convidReducer;
