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
				<h1 className="font-weight-bold display-3 erbaum-bold">Coming Soon...</h1>
			</Jumbotron>
		</section>
		<section className="mb-0 py-5 approved bg-image">
			<Container>
				<Row>
					<Col sm="4" className="align-middle">
						<img src={run} alt="run" width="70%"/>
					</Col>
					<Col sm="8">
						<div className="text-white mb-4 mt-4 pt-3 pl-3">
							<h4 className="lead-text-font text-white erbaum-bold display-5">CUSTOMER APPROVED</h4>
							<p className="proxima-b space-1" style={{width:'75%', fontSize:'16px'}}>Our customers have reported the following benefits after sleeping on there chirofoam mattress</p>
							<div className="pt-3">
								<Media className="mt-3">
								  <Media left middle className="mr-4 h4 erbaum-bold" style={{fontSize:'32px'}}>
									97%
								  </Media>
								  <Media body middle className="proxima-r" style={{fontSize:'1.1rem'}}>
									  Improvement in sleep comfort and quality
								  </Media>
								</Media>
								<Media className="mt-3">
								  <Media left middle className="mr-4 h4 erbaum-bold" style={{fontSize:'32px'}}>
									94%
								  </Media>
								  <Media body middle className="proxima-r" style={{fontSize:'1.1rem'}}>
									  Increased energy in the morning and throughout the day
								  </Media>
								</Media>
								<Media className="mt-3">
								  <Media left middle className="mr-4 h4 erbaum-bold" style={{fontSize:'32px'}}>
									86%
								  </Media>
								  <Media body middle className="proxima-r" style={{fontSize:'1.1rem'}}>
									  Improved muscle recovery and/or relief in daliy experienced back pain
								  </Media>
								</Media>
								<Media className="mt-3">
								  <Media left middle className="mr-4 h4 erbaum-bold" style={{fontSize:'32px'}}>
									82%
								  </Media>
								  <Media body middle className="proxima-r" style={{fontSize:'1.1rem'}}>
									  Improvement in sleep comfort and quality
								  </Media>
								</Media>
								<p><i class="fa fa-caret-right" aria-hidden="true"></i></p>
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