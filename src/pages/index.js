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
						<h2 className="display-3 font-weight-bold " style={{color:'#243B6B'}}>ACTIVE LIFESTYLE</h2>
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
					</Col>
				</Row>
			</Container>
		</section>

		<section className="mt-4 mb-4 py-4" style={{backgroundColor: '#243C69'}}>
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
					<Col sm="8">
						<img src={mattress2} alt="Mattress1" width="100%"/>
					</Col>
				</Row>
			</Container>
		</section>

		<section className="mt-4 mb-4 py-4" style={{backgroundColor: '#fff'}}>
			<Container>
				<h4 className="h4 font-weight-bold text-center" style={{color:'#243B6B'}}>THE COMFORT AND SUPPORT YOU NEED FOR A BETTER SLEEP</h4>
				<p className="width-50 text-center" style={{color:'#243B6B'}}>
					Try the world-class rated mattress with free continetal USA and Canada-wide delivery, and a 100-night sleep trial
				</p>
				<Row className="">
					<Col sm="6" className="pr-4 border-right">
						<img src={product1} alt="Product1" width="100%" />
						<h3 className="text-right">THE ORIGINAL CHIROFOAM MATTRESS - LUXURY FIRM</h3>
						<p className="text-right" style={{color:'#243B6B'}}>
							The Original Chirofoam Memory Foam Mattress is designed to increase muscle recovery to help keep you performing at your best. Made in Toronto, ON. Upgrade your sleep today!
						</p>
						<p className="text-right" style={{color:'#243B6B'}}>
							Ideal for all sleeping positions.
						</p>
						<p className="text-right" style={{color:'#243B6B'}}>
							Firmness sacle: 7.5/10-Luxury Firm
						</p>
						<p className="text-right mb-4" style={{color:'#243B6B'}}>
							Profile: 12 inches
						</p><br />
						<p className="mt-4 text-right">
							<Button color="primary">CALL TO ACTION</Button>
						</p>
					</Col>
					
					<Col sm="6" className="pl-4">
						<img src={product2} alt="Product2" width="100%" />
						<h3>THE CHIROFOAM XF MATTRESS - EXTRA FIRM</h3>
						<p className="text-left" style={{color:'#243B6B'}}>
							The Chirofoam XF Memory Foam Mattress is an extra firm designed maximum back support. Developed for indiduals and atheletes who suffer from back pain and require the greatest amount of stiffness for efficient recovery.
						</p>
						<p className="text-left" style={{color:'#243B6B'}}>
							Upgrade your sleep today!
						</p>
						<p className="text-left" style={{color:'#243B6B'}}>
							Ideal for back and stomach sleepers.
						</p>
						<p className="text-left" style={{color:'#243B6B'}}>
							Firmness sacle: 10/10-Extra Firm
						</p>
						<p className="text-left" style={{color:'#243B6B'}}>
							Profile: 10 inches
						</p>
						<p className="text-white">
							<Button color="primary">CALL TO ACTION</Button>
						</p>
					</Col>
				</Row>
			</Container>
		</section>
		
		<section className="mt-4 mb-4 py-4" style={{backgroundColor:'#182951'}}>
			<Container>
				<Row>
					<Col sm="4" className="align-middle">
						<img src={mattress3} alt="Mattress3" width="100%"/>
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
									  Improved muscle recovery and/or relief in daliy experienced bed pain
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