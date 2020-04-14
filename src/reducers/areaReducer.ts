import { CHANGE_AREA } from '../constants/covidConstant';

const defaultState = {
  area: 'Australia',
};

const areaReducer = (state = defaultState, action: any): any => {
  const { type, area } = action;
  Object.freeze(state);

  const newState = Object.assign({}, state);

  switch (type) {
    case CHANGE_AREA:
      return Object.assign({}, newState, { area });
    default:
      return newState;
  }
};

export default areaReducer;
