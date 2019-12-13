import React from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import "../assets/css/bootstrap.min.css"

const Banner = () => (
	<Jumbotron style={{ backgroundColor: '#151F40', borderRadius: '0', color: '#fff' }}>
		<Row>
			<Col md="6">
			
			</Col>
			<Col md="6">			
				<p className="leads">CHIROFOAM MEMORY FOAM MATTRESS</p>
				<h2 className="display-2 font-weight-bold">UPGRADE</h2>
				<h3 className="h1">YOUR SLEEP</h3>
				<p className="lead">
				  <Button color="primary">CALL TO ACTION</Button>
				</p>
			</Col>
		</Row>
	</Jumbotron>
)

export default Banner;