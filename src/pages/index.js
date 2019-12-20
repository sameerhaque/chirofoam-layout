import React from 'react';
import Header from "../components/header"
import Banner from "../components/banner"
import Footer from "../components/footer"
import {Container, Row, Col, Button, Media} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import mattress1 from "../assets/img/mattress1.jpg"
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
						<p className="proxima-eb color-primary">
							"Chirofoam is a premuim memory foam matttress designed with 5 key features consumers voted most important in a new mattress. Created by industry experts, for atheletes and individuals seeking better performance through a better sleep.
						</p>
						
						<p className="proxima-eb color-primary">
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
					<h4 className="text-center lead-text-font color-primary jersey display-5" style={{width:'100%', letterSpacing:'2px'}}>5 KEY FEATURES IN EVERY CHIROFOAM MATTRESS</h4>
					<p className="text-center pb-5 pt-2 mb-5 color-primary proxima-b m-auto" style={{width:'50%', letterSpacing:'1px'}}>Aenean suscipit, lacus at handerit porta, massa sem efficitur est, quis mattis eros quam In saplen.</p>
					<div style={{width:'80%', margin:'0px auto'}} className="d-flex no-gutters mt-5">
						<Col sm="4">
							<div className="card-bg bg-image">
								<div className="card-layer">
									<h3 className="display-3 font-weight-bold text-right text-white pr-3 jersey">01</h3>
									<div className="text-white position-absolute fixed-bottom p-3">
										<h4 className="jersey space-2"  style={{fontSize:'22px', fontWeight:'700',paddingRight:'40px'}}>PRESSURE RELIEF FOAM</h4>
										<p className="proxima-r" style={{fontSize:'14px', letterSpacing:'1px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									</div>
								</div>
							</div>
						</Col>
						<Col sm="4">
							<div className="card-bg bg-image">
								<div className="card-layer">
									<h3 className="display-3 font-weight-bold text-right text-white pr-3 jersey">02</h3>
									<div className="text-white position-absolute fixed-bottom p-3">
										<h4 className="jersey space-2" style={{fontSize:'22px', fontWeight:'700',paddingRight:'40px'}}>PROPPER BACK SUPPORT AND ALIGNMENT</h4>
										<p className="proxima-r" style={{fontSize:'14px', letterSpacing:'1px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									</div>
								</div>
							</div>
						</Col>
						<Col sm="4">
							<div className="card-bg bg-image">
								<div className="card-layer">
									<h3 className="display-3 font-weight-bold text-right text-white pr-3 jersey">03</h3>
									<div className="text-white position-absolute fixed-bottom p-3">
										<h4 className="jersey space-2" style={{fontSize:'22px', fontWeight:'700',paddingRight:'40px'}}>SOFT AND MAINTAIN TEMPRETURE</h4>
										<p className="proxima-r" style={{fontSize:'14px', letterSpacing:'1px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
						<p className="text-white proxima-r">
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
				<h4 className="text-center lead-text-font color-primary jersey display-5" style={{width:'100%', letterSpacing:'2px'}}>THE COMFORT AND SUPPORT YOU NEED FOR A BETTER SLEEP</h4>
				<p className="text-center pb-5 pt-2 mb-5 color-primary proxima-b m-auto" style={{width:'50%', letterSpacing:'1px'}}>Aenean suscipit, lacus at handerit porta, massa sem efficitur est, quis mattis eros quam In saplen.</p>
				<Row className="">
					<Col sm="6" className="pr-5 border-right">
						<img src={product1} alt="Product1" width="100%" />
						<h3 className="text-right color-primary jersey  space-2 pl-5 ml-5">THE ORIGINAL CHIROFOAM<sup style={{fontSize:'16px'}}>TM</sup> MATTRESS - LUXURY FIRM</h3>
						<p className="text-right color-primary proxima-r">
							The Original Chirofoam Memory Foam Mattress is designed to increase muscle recovery to help keep you performing at your best. Made in Toronto, ON. Upgrade your sleep today!
						</p>
						<p className="text-right color-primary proxima-r">
							Ideal for all sleeping positions.
						</p>
						<p className="text-right color-primary proxima-r">
							Firmness sacle: 7.5/10-Luxury Firm
						</p>
						<p className="text-right mb-4 color-primary proxima-r">
							Profile: 12 inches
						</p><br />
						<p className="mt-4 text-right">
							<Button color="primary">CALL TO ACTION</Button>
						</p>
					</Col>
					
					<Col sm="6" className="pl-5">
						<img src={product2} alt="Product2" width="100%" />
						<h3 className="color-primary jersey space-2 pr-5 mr-5">THE CHIROFOAM<sup style={{fontSize:'16px'}}>TM</sup> XF MATTRESS - EXTRA FIRM</h3>
						<p className="text-left color-primary proxima-r">
							The Chirofoam XF Memory Foam Mattress is an extra firm designed maximum back support. Developed for indiduals and atheletes who suffer from back pain and require the greatest amount of stiffness for efficient recovery.
						</p>
						<p className="text-left color-primary proxima-r">
							Upgrade your sleep today!
						</p>
						<p className="text-left color-primary proxima-r">
							Ideal for back and stomach sleepers.
						</p>
						<p className="text-left color-primary proxima-r">
							Firmness sacle: 10/10-Extra Firm
						</p>
						<p className="text-left color-primary proxima-r">
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
							<h4 className="lead-text-font text-white jersey display-5 space-1">CHIROPRACTOR APPROVED</h4>
							<p className="proxima-b space-1" style={{width:'75%', fontSize:'14px'}}> mattresses are designed by Chiropractors to improve posture, and provide incredible pressure relief. Your back will thank you.</p>
							<p>
								<Button color="primary">CALL TO ACTION</Button>
							</p>
						</div>
						
						<div className="text-white mb-4 mt-4">
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
							<h4 className="lead-text-font color-primary jersey display-5 space-1">WHAT OUR CUSTOMERS ARE SAYING ABOUT CHIROFOAM</h4>
							<p className="proxima-b space-1">CUSTOMER REVIEW</p>
							<p className="proxima-b space-1">Chirofoam mattresses are designed by Chiropractors to improve posture, and provide incredible pressure relief. Your back will thank you.</p>
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