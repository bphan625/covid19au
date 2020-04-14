import { CHANGE_AREA } from '../constants/covidConstant';
import { Dispatch } from 'redux';

export const changeArea = (area: string): any => ({
  area,
  type: CHANGE_AREA,
});
export const changeAreaAction = (area: string): ((dispatch: Dispatch<any>) => void) => {
  return (dispatch: Dispatch<any>): void => {
    dispatch(changeArea(area));
  }
};
