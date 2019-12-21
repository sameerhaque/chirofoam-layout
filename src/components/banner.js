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
					<p className="leads filson-pro-reg mb-1" style={{letterSpacing:'2px'}}>CHIROFOAM MEMORY FOAM MATTRESS</p>
					<h2 className="display-2 erbaum-bold" style={{fontStyle:'italic'}}>UPGRADE</h2>
					<h3 className="h1 erbaum" style={{letterSpacing:'2px'}}>YOUR SLEEP</h3>
					<p className="cta erbaum mt-4">
							<a href="#" className="text-white">CALL TO ACTION <i class="fa fa-caret-right ic1"></i><i class="fa fa-caret-right ic2"></i><i class="fa fa-caret-right ic3"></i></a>
						</p>
				</Col>
			</Row>
		</Container>
	</Jumbotron>
)

export default Banner;