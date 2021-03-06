import React, { Component } from 'react';

import { Doughnut } from 'react-chartjs-2';
import classes from './Chart.module.scss';

class Chart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chartData: {
				labels: null,
				datasets: [
					{
						data: [ '2500', '7000', '1500', '1000', '24000' ],
						backgroundColor: [
							'rgba(255, 99, 132, 0.3)',
							'rgba(54, 162, 235, 0.3)',
							'rgba(255, 206, 86, 0.3)',
							'rgba(75, 192, 192, 0.3)',
							'rgba(153, 102, 255, 0.3)',
							'rgba(255, 159, 64, 0.3)'
						]
					}
				]
			}
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			chartData: {
				labels: nextProps.items
			}
		});
	}

	render() {
		let chart = null;
		if (this.state.chartData.labels) {
			console.log(this.state.chartData.labels);
			chart = (
				<div className={classes.Chart} style={{ height: '700px', width: '800px' }}>
					<Doughnut
						data={this.state.chartData}
						options={{
							legend: {
								display: true,
								position: 'bottom'
							}
						}}
					/>
				</div>
			);
		}
		return chart;
	}
}

export default Chart;
