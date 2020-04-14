import * as React from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../types/commonTypes';
import {generateChartData} from '../utils';
import LineChart from './hocComponents/LineChart';
import { CONFIRMED_COLOR } from '../constants/covidConstant';

function Confirmed() {
  const covidData = useSelector((state: IRootState) => state.Covid);
  const areaData = useSelector((state: IRootState) => state.Area);
  const currentAreaData = covidData.data[areaData.area];
  const {labels, confirmedData} = generateChartData(currentAreaData);

  return (
    <div className='chart-container'>
      <LineChart data={confirmedData} labels={labels} name={'Confirmed cases'} color={CONFIRMED_COLOR}/>
    </div>
  )
}

export default Confirmed;
