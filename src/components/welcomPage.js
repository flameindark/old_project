import React,{Component} from 'react';
import StartSection from './startSection.js';
import Casousels from './casousels.js';
import Chart from './chart.js';
import {demoData,componentData,fullpageData,sProjectData,bProjectData} from '../config/data_config.js';

class WelcomPage extends Component {
	componentWillMount(){
	    this.getChartData();
	}

	getChartData(){
	  this.setState({
	    chartData : {
	      labels: ["js_api", "Component", "page_layout", "smallproject", "other"],
	          datasets: [{
	              label: '相关练习作品数',
	              data: [demoData.length, componentData.length, fullpageData.length, sProjectData.length, bProjectData.length],
	              backgroundColor: [
	                  'rgba(255, 99, 132, 0.2)',
	                  'rgba(54, 162, 235, 0.2)',
	                  'rgba(255, 206, 86, 0.2)',
	                  'rgba(75, 192, 192, 0.2)',
	                  'rgba(100, 102, 255, 0.2)'
	              ],
	              borderColor: [
	                  'rgba(255,99,132,1)',
	                  'rgba(54, 162, 235, 1)',
	                  'rgba(255, 206, 86, 1)',
	                  'rgba(75, 192, 192, 1)',
	                  'rgba(153, 102, 255, 1)'
	              ],
	              borderWidth: 1
	          }]
	    }
	  })
	}

	render() {
		return(
			<div>
				<StartSection/>
				<Chart chartData={this.state.chartData}/>
			</div>
		)
	}
}

export default WelcomPage

