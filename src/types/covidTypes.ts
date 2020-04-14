export interface IDefaultCovidState {
  isFetchingCovid: boolean;
  data: ICovidAll;
}

export interface ICovidDataOneArea {
  date: string;
  confirmed: number;
  deaths: number;
  recovered: number;
}

export interface IArea {
  area: string;
}

export type ICovidAll = {[x: string]: Array<ICovidDataOneArea>};
