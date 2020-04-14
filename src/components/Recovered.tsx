import * as React from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../types/commonTypes';
import {generateChartData} from '../utils';
import LineChart from './hocComponents/LineChart';
import { RECOVERED_COLOR } from '../constants/covidConstant';

function Recovered() {
  const covidData = useSelector((state: IRootState) => state.Covid);
  const areaData = useSelector((state: IRootState) => state.Area);
  const currentAreaData = covidData.data[areaData.area];
  const {labels, recoveredData} = generateChartData(currentAreaData);

  return (
    <div className='chart-container'>
      <LineChart data={recoveredData} labels={labels} name={'Recovered number'} color={RECOVERED_COLOR}/>
    </div>
  )
}

export default Recovered;
