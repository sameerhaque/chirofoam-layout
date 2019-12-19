import React from 'react';
import Header from "../components/header"
import Banner from "../components/banner"
import Footer from "../components/footer"
import {Container, Row, Col, Button, Media} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import mattress1 from "../assets/img/mattress1.jpg"
import mattress2 from "../assets/img/mattress2.jpg"
import mattress3 from "../assets/img/mattress3.jpg"
import product1 from "../assets/img/product1.jpg"
import product2 from "../assets/img/product2.jpg"
import blog1 from "../assets/img/blog1.jpg"
import run from "../assets/img/run.png"
import { Link } from "gatsby"

export default (props) => {
  return (
	<>
		<Header />
		<Banner />
		<section className="mt-4 mb-4">
			<Container>
				<Row>
					<Col sm="6">
						<small className="">DESIGNED FOR YOUR</small>
						<h2 className="display-3 font-weight-bold color-primary">ACTIVE LIFESTYLE</h2>
						<p className="">
							"Chirofoam is a premuim memory foam matttress designed with 5 key features consumers voted most important in a new mattress. Created by industry experts, for atheletes and individuals seeking better performance through a better sleep.
						</p>
						
						<p>
							Try the world-class rated mattress with free continetal USA and Caanada-wide delivery, and a 100-night sleep trial."
						</p>
						<Button color="primary">CALL TO ACTION</Button>
					</Col>
					<Col sm="6">
						<img src={mattress1} alt="Mattress1" width="100%"/>
						 <ul className="list-unstyled d-flex float-right mt-3">
							  <li className="ml-5 font-weight-bold"><Link to="/" className="color-primary" style={{fontSize:'14px'}}>OUR STORY </Link></li>
							  <li className="ml-5 font-weight-bold"><Link to="/" className="color-primary" style={{fontSize:'14px'}}>LOCATIONS </Link></li>
							  <li className="ml-5 font-weight-bold"><Link to="/" className="color-primary" style={{fontSize:'14px'}}>BUY ONLINE </Link></li>
						</ul> 
					</Col>
				</Row>
			</Container>
		</section>
		<section className="py-5">
			<Container className="py-5">
				<Row>
					<h4 className="h4 font-weight-bold text-center pb-5 mb-5 lead-text-font color-primary" style={{width:'100%'}}>5 KEY FEATURES IN EVERY CHIROFOAM MATTRESS</h4>
					<div style={{width:'80%', margin:'0px auto'}} className="d-flex no-gutters">
						<Col sm="4">
							<div className="card-bg bg-image">
								<div className="card-layer">
									<h3 className="display-3 font-weight-bold text-right text-white pr-2">01</h3>
									<div className="text-white position-absolute fixed-bottom p-3">
										<h4 style={{fontSize:'22px', fontWeight:'700',paddingRight:'40px'}}>PRESSURE RELIEF FOAM</h4>
										<p style={{fontSize:'14px', letterSpacing:'1px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									</div>
								</div>
							</div>
						</Col>
						<Col sm="4">
							<div className="card-bg bg-image">
								<div className="card-layer">
									<h3 className="display-3 font-weight-bold text-right text-white pr-2">02</h3>
									<div className="text-white position-absolute fixed-bottom p-3">
										<h4 style={{fontSize:'22px', fontWeight:'700',paddingRight:'40px'}}>PROPPER BACK SUPPORT AND ALIGNMENT</h4>
										<p style={{fontSize:'14px', letterSpacing:'1px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									</div>
								</div>
							</div>
						</Col>
						<Col sm="4">
							<div className="card-bg bg-image">
								<div className="card-layer">
									<h3 className="display-3 font-weight-bold text-right text-white pr-2">03</h3>
									<div className="text-white position-absolute fixed-bottom p-3">
										<h4 style={{fontSize:'22px', fontWeight:'700',paddingRight:'40px'}}>SOFT AND MAINTAIN TEMPRETURE</h4>
										<p style={{fontSize:'14px', letterSpacing:'1px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									</div>
								</div>
							</div>
						</Col>
					</div>
				</Row>
			</Container>
		</section>
		<section className="my-4 py-5 max-support bg-image">
			<Container>
				<Row className="">
					<Col sm="4">
						<h2 className="display-3 font-weight-bold text-white">MAX SUPPORT MAX RESULTS</h2>
						<p className="text-white ">
							COOL GEL INFUSED MEMORY FOAM<br />
							EXTRA FIRM SUPPORT CHIROFOAM<br />
							CHIROFOAM LUMBAR SUPPORT<br />
							BODY SUPPORT BIO FOAM CORE
						</p>
						<p className="text-white">
							<Button color="primary">CALL TO ACTION</Button>
						</p>
					</Col>
				</Row>
			</Container>
		</section>

		<section className="mt-4 mb-4 py-4" style={{backgroundColor: '#fff'}}>
			<Container>
				<h4 className="h4 font-weight-bold text-center lead-text-font color-primary">THE COMFORT AND SUPPORT YOU NEED FOR A BETTER SLEEP</h4>
				<p className="width-50 text-center color-primary">
					Try the world-class rated mattress with free continetal USA and Canada-wide delivery, and a 100-night sleep trial
				</p>
				<Row className="">
					<Col sm="6" className="pr-5 border-right">
						<img src={product1} alt="Product1" width="100%" />
						<h3 className="text-right color-primary font-weight-bold">THE ORIGINAL CHIROFOAM<sup>TM</sup> MATTRESS - LUXURY FIRM</h3>
						<p className="text-right color-primary">
							The Original Chirofoam Memory Foam Mattress is designed to increase muscle recovery to help keep you performing at your best. Made in Toronto, ON. Upgrade your sleep today!
						</p>
						<p className="text-right color-primary">
							Ideal for all sleeping positions.
						</p>
						<p className="text-right color-primary">
							Firmness sacle: 7.5/10-Luxury Firm
						</p>
						<p className="text-right mb-4 color-primary">
							Profile: 12 inches
						</p><br />
						<p className="mt-4 text-right">
							<Button color="primary">CALL TO ACTION</Button>
						</p>
					</Col>
					
					<Col sm="6" className="pl-5">
						<img src={product2} alt="Product2" width="100%" />
						<h3 className="color-primary font-weight-bold">THE CHIROFOAM<sup>TM</sup> XF MATTRESS - EXTRA FIRM</h3>
						<p className="text-left color-primary">
							The Chirofoam XF Memory Foam Mattress is an extra firm designed maximum back support. Developed for indiduals and atheletes who suffer from back pain and require the greatest amount of stiffness for efficient recovery.
						</p>
						<p className="text-left color-primary">
							Upgrade your sleep today!
						</p>
						<p className="text-left color-primary">
							Ideal for back and stomach sleepers.
						</p>
						<p className="text-left color-primary">
							Firmness sacle: 10/10-Extra Firm
						</p>
						<p className="text-left color-primary">
							Profile: 10 inches
						</p>
						<p className="text-white">
							<Button color="primary">CALL TO ACTION</Button>
						</p>
					</Col>
				</Row>
			</Container>
		</section>
		
		<section className="mt-4 mb-4 py-5 approved bg-image">
			<Container>
				<Row>
					<Col sm="4" className="align-middle">
						<img src={run} alt="run" width="70%"/>
					</Col>
					<Col sm="8">
						<div className="text-white mb-4">
							<h5>CHIROPRACTOR APPROVED</h5>
							<p>Chirofoam mattresses are designed by Chiropractors to improve posture, and provide incredible pressure relief. Your back will thank you.</p>
							<p>
								<Button color="primary">CALL TO ACTION</Button>
							</p>
						</div>
						
						<div className="text-white mb-4 mt-4">
							<h5>CUSTOMER APPROVED</h5>
							<p>Our customers have reported the following benefits after sleeping on there chirofoam mattress</p>
							<div className="ml-4">
								<Media >
								  <Media left middle className="mr-4 h4">
									97%
								  </Media>
								  <Media body middle>
									  Improvement in sleep comfort and quality
								  </Media>
								</Media>
								<Media >
								  <Media left middle className="mr-4 h4">
									94%
								  </Media>
								  <Media body middle>
									  Increased energy in the morning and throughout the day
								  </Media>
								</Media>
								<Media >
								  <Media left middle className="mr-4 h4">
									86%
								  </Media>
								  <Media body middle>
									  Improved muscle recovery and/or relief in daliy experienced back pain
								  </Media>
								</Media>
								<Media >
								  <Media left middle className="mr-4 h4">
									82%
								  </Media>
								  <Media body middle>
									  Improvement in sleep comfort and quality
								  </Media>
								</Media>
							</div>
							<p className="mt-4">
								<Button color="primary">READ CUSTOMER REVIEW</Button>
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</section>

		<section className="mt-4 mb-4 py-4" style={{backgroundColor:'#fff'}}>
			<Container>
				<Row>
					<Col sm="6">
						<div className="mb-4">
							<h4>WHAT OUR CUSTOMERS ARE SAYING ABOUT CHIROFOAM</h4>
							<p>CUSTOMER REVIEW</p>
							<p>Chirofoam mattresses are designed by Chiropractors to improve posture, and provide incredible pressure relief. Your back will thank you.</p>
							<p>
								<Button color="primary">CALL TO ACTION</Button>
							</p>
						</div>
					</Col>
					<Col sm="6" className="align-middle">
						<img src={blog1} alt="Blog1" width="100%"/>
					</Col>
				</Row>
			</Container>
		</section>
		<Footer />
	</>
  );
};