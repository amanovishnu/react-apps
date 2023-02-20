import React from 'react';
import ChartBar from './ChartBar';

import './Chart.css';

const Chart = (props) => {

	const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
	const totalMaximum = Math.max(...dataPointValues);
	console.log('totalMaximum ->', totalMaximum);

	return (
		<div className='chart'>
			{
				props.dataPoints.map(dataPoint => {
					return (
						<ChartBar
							key={dataPoint.label}
							value={dataPoint.value}
							label={dataPoint.label}
							maxValue={totalMaximum}
						/>
					)
				})
			}
		</div>
	)
}
export default Chart;
