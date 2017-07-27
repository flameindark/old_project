import React,{Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';

class Chart extends Component {

	static defaultProps = {
		displayTitle : true,
		displayLegend : true,
		legendPosition : 'right',
		location : 'City'
	}
	render() {
		return (
			<div className="chart">
				<Bar
					data={this.props.chartData}
					options={{
						title: {
			            display: this.props.displayTitle,
			            text: '当前练习的数量',
			            fontSize:24
			        	},
			        	legend: {
				            display: true,
				            labels: {
				                fontColor: 'rgb(255, 99, 132)'
				            },
				            position : this.props.legendPosition
				        }
					}}
				/>
				<Pie
					data={this.props.chartData}
					options={{
						title: {
			            display: this.props.displayTitle,
			            text: '当前练习的数量',
			            fontSize:24
			        	},
			        	legend: {
				            display: true,
				            labels: {
				                fontColor: 'rgb(255, 99, 132)'
				            },
				            position : this.props.legendPosition
				        }
					}}
				/>
				<Line
					data={this.props.chartData}
					options={{
						title: {
			            display: this.props.displayTitle,
			            text: '当前练习的数量',
			            fontSize:24
			        	},
			        	legend: {
				            display: true,
				            labels: {
				                fontColor: 'rgb(255, 99, 132)'
				            },
				            position : this.props.legendPosition
				        }
					}}
				/>
			</div>
		);
	}
}

export default Chart;