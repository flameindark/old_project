import React,{Component} from 'react';
import {Button,Grid,Col,Row,PageHeader,} from 'react-bootstrap';
import './startSection.css';

class StartSection extends Component {


	render() {
		return(
			<section id="cover">
		        <div id="cover-caption">
		            <Grid>
					    <Row className="show-grid">
					      	<Col sm={10} smOffset={1}>
					      		<div className="intro">
					      			<h1 className="title">{this.props.welcom}</h1>
		                    		<p>{this.props.greeting} </p>
					      		</div>
		                    	<Button bsStyle="default" className="btn btn-secondary-outline btn-sm">&darr;</Button>
		                	</Col>
					    </Row>
					 </Grid>
		        </div>
		    </section>
		)
	}
}

export default StartSection