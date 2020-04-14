import * as React from 'react';
import {useRef, useEffect} from 'react';
import Chart from 'chart.js';

interface LineChartProps {
  data: Array<number>,
  labels: Array<string>,
  name: string,
  color: string,
}

function LineChart({data, labels, name, color}: LineChartProps): JSX.Element {
  const chartContainer = useRef(null);
  const chartConfig = {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: name,
        data,
        backgroundColor: color
      }]
    },
  };
  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      // @ts-ignore
      const newChartInstance = new Chart(chartContainer.current, chartConfig);
      return () => {
        return newChartInstance.destroy();
      }
    }
  }, [chartConfig]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  )
}

export default LineChart;
