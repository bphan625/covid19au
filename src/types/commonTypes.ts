import { IArea, IDefaultCovidState } from './covidTypes';

export interface IRootState {
  Covid: IDefaultCovidState,
  User: any,
  Area: IArea,
};
export type IMouseClickEvent = (event: React.MouseEvent<HTMLElement>) => void;

