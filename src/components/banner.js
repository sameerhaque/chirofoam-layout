import React from 'react';
import {Row, Col, Jumbotron,Container, Button } from 'reactstrap';
import "../assets/css/bootstrap.min.css"

const Banner = () => (
	<Jumbotron className="home-banner bg-image" style={{borderRadius: '0', color: '#fff' }}>
		<Container className="position-relative">
			<Row>
				<Col md="6">
				
				</Col>
				<Col md="6" className="text-center position-absolute" style={{right:'0', marginTop:'100px'}}>			
					<p className="leads proxima-t mb-1" style={{letterSpacing:'2px'}}>CHIROFOAM MEMORY FOAM MATTRESS</p>
					<h2 className="display-2 jersey" style={{fontStyle:'italic', letterSpacing:'2px'}}>UPGRADE</h2>
					<h3 className="h1 jersey" style={{letterSpacing:'6px', fontWeight:'400'}}>YOUR SLEEP</h3>
					<p className="lead mt-4">
					  <Button color="primary">CALL TO ACTION</Button>
					</p>
				</Col>
			</Row>
		</Container>
	</Jumbotron>
)

export default Banner;