import React from 'react';
import Header from "../components/header"
import Footer from "../components/footer"
import {Container,Jumbotron, Row, Col, Button, Media} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import run from "../assets/img/run.png"


export default (props) => {
  return (
	<>
		<Header />
		<section>
			<Jumbotron className="mb-0 text-center color-primary">
				<h1 className="font-weight-bold display-3 jersey space-1">Coming Soon...</h1>
			</Jumbotron>
		</section>
		<section className="mt-0 mb-0 py-5 approved bg-image">
			<Container>
				<Row>
					<Col sm="4" className="align-middle">
						<img src={run} alt="run" width="70%"/>
					</Col>
					<Col sm="8">
						<div className="text-white mb-4 mt-4 pt-3 pl-3">
							<h4 className="lead-text-font text-white jersey display-5 space-1">CUSTOMER APPROVED</h4>
							<p className="proxima-b space-1" style={{width:'75%', fontSize:'14px'}}>Our customers have reported the following benefits after sleeping on there chirofoam mattress</p>
							<div className="ml-4 pt-3">
								<Media className="mt-3">
								  <Media left middle className="mr-4 h4 jersey">
									97<span style={{fontFamily:'initial', fontWeight:'bold'}}>%</span>
								  </Media>
								  <Media body middle>
									  Improvement in sleep comfort and quality
								  </Media>
								</Media>
								<Media className="mt-3">
								  <Media left middle className="mr-4 h4 jersey">
									94<span style={{fontFamily:'initial', fontWeight:'bold'}}>%</span>
								  </Media>
								  <Media body middle>
									  Increased energy in the morning and throughout the day
								  </Media>
								</Media>
								<Media className="mt-3">
								  <Media left middle className="mr-4 h4 jersey">
									86<span style={{fontFamily:'initial', fontWeight:'bold'}}>%</span>
								  </Media>
								  <Media body middle>
									  Improved muscle recovery and/or relief in daliy experienced back pain
								  </Media>
								</Media>
								<Media className="mt-3">
								  <Media left middle className="mr-4 h4 jersey">
									82<span style={{fontFamily:'initial', fontWeight:'bold'}}>%</span>
								  </Media>
								  <Media body middle>
									  Improvement in sleep comfort and quality
								  </Media>
								</Media>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>

		<Footer />
	</>
  );
};