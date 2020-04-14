import { ICovidDataOneArea } from '../types/covidTypes';

export const sum = (a: number, b: number): number => {
    return a + b;
};
export const generateChartData =
  (covidData: Array<ICovidDataOneArea>): {
    labels: Array<string>,
    confirmedData: Array<number>,
    deathData: Array<number>,
    recoveredData: Array<number>
  } => {
    const labels = [];
    const confirmedData = [];
    const recoveredData = [];
    const deathData = [];
    for(const c of covidData) {
        deathData.push(c.deaths);
        confirmedData.push(c.confirmed);
        recoveredData.push(c.recovered);
        labels.push(c.date);
    }
    return { confirmedData, labels, deathData, recoveredData };
};
