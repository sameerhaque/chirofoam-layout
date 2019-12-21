import React from 'react';
import Header from "../components/header"
import Footer from "../components/footer"
import Banner from "../components/banner-shop-chirofoam"
import {Container, Row, Col, Button, Media} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import product1 from "../assets/img/product1.jpg"
import product2 from "../assets/img/product2.jpg"
import mattress1 from "../assets/img/mattress1.jpg"
import run from "../assets/img/run.png"


export default (props) => {
  return (
	<>
		<Header />
		<Banner/>
		<section className="mt-4 mb py-4" style={{backgroundColor:'#fff'}}>
				<Row className="no-gutters">
					<Col sm="4" className="card1 bg-image">
						<div className="card-layer">
							<span className="proxima-b text-center text-white" style={{position:'absolute', top:'50%', left:'0', right:'0'}}>AENEAN SEMPER EST URNA</span>
						</div>
					</Col>
					<Col sm="4" className="card2 bg-image">
						<div className="card-layer">
							<span className="proxima-b text-center text-white" style={{position:'absolute', top:'50%', left:'0', right:'0'}}>SIT AMET GRAVIDA TORTO</span>
						</div>
					</Col>
					<Col sm="4" className="card3 bg-image">
						<div className="card-layer">
							<span className="proxima-b text-center text-white" style={{position:'absolute', top:'50%', left:'0', right:'0'}}>DONEC EROS EX</span>
						</div>
					</Col>
				</Row>
		</section>
		<section className="mt-0 mb-4 pb-5" style={{backgroundColor: '#fff'}}>
			<Container>
				<h4 className="lead-text-font color-primary text-center erbaum-bold display-5">THE COMFORT AND SUPPORT YOU NEED FOR A BETTER SLEEP</h4>
				<p className="text-center pb-5 pt-2 mb-5 color-primary proxima-b m-auto" style={{width:'50%', letterSpacing:'1px'}}>
					Aenean suscipit , lacus at hendererit poirta, massa sen efficitur est, quis matties eros quam in sapien.
				</p>
				<Row className="pt-5">
					<Col sm="6" className="pr-5 border-right">
						<img src={product1} alt="Product1" width="100%" />
						<h3 className="text-right color-primary erbaum-bold pl-0 ml-5">THE ORIGINAL CHIROFOAM<sup style={{fontSize:'16px'}}>TM</sup> MATTRESS - LUXURY FIRM</h3>
						<p className="text-right color-primary proxima-r" style={{fontSize:'14px'}}>
								<b className="proxima-eb">Our specilized layer of chirofoam<sup>TM</sup> lumbar support</b> provides an additional 20% of conforming support in the centre third of mattress for improved lumbar support and increased life span of the mattress. The majority of your body's weight rests in the centre third of the mattress where you need the most support to keep your spine in optimal alignment while relieving back pain. The pro Lumbar Support layer is also designed to resist sagging and keeps your mattress comfortable and more supportive even far boyond our 15 years warranty period.   </p>
						<p className="cta erbaum mt-4 text-right">
							<a href="#" className="color-primary">CALL TO ACTION <i class="fa fa-caret-right ic1"></i><i class="fa fa-caret-right ic2"></i><i class="fa fa-caret-right ic3"></i></a>
						</p>
						<span className="proxima-b color-primary" style={{fontSize:'1.2rem'}}>CAD $6902.00 - CAD 1090.00 </span>
					</Col>
					
					<Col sm="6" className="pl-5">
						<img src={product2} alt="Product2" width="100%" />
						<h3 className="color-primary erbaum-bold pr-0 mr-5">THE CHIROFOAM<sup style={{fontSize:'16px'}}>TM</sup> XF MATTRESS - EXTRA FIRM</h3>
						<p className="text-left color-primary proxima-r" style={{fontSize:'14px'}}>
								<b className="proxima-eb">Our specilized layer of chirofoam<sup>TM</sup> lumbar support</b> provides an additional 20% of conforming support in the centre third of mattress for improved lumbar support and increased life span of the mattress. The majority of your body's weight rests in the centre third of the mattress where you need the most support to keep your spine in optimal alignment while relieving back pain. The pro Lumbar Support layer is also designed to resist sagging and keeps your mattress comfortable and more supportive even far boyond our 15 years warranty period.   </p>
						<p className="cta erbaum">
							<a href="#" className="color-primary">CALL TO ACTION <i class="fa fa-caret-right ic1"></i><i class="fa fa-caret-right ic2"></i><i class="fa fa-caret-right ic3"></i></a>
						</p>
						<span className="proxima-b color-primary" style={{ fontSize:'1.2rem'}}>CAD $540.00 - CAD 940.00 </span>
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
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
		<section className="mt-4 mb-4 py-3">
			<Container>
				<Row>
					<Col sm="6" className="position-relative" style={{zIndex:'9'}}>
						<h4 className="lead-text-font color-primary erbaum-bold display-5">ONDIMENTUM QUISBIBENDUM SED</h4>
						<p className="mt-4 color-primary proxima-r" style={{fontSize:'0.9rem'}}>
							<b className="proxima-eb">Our specilized layer of chirofoam<sup style={{fontSize:'7px'}}>TM</sup> lumbar support</b> provides an additional 20% of conforming support in the centre third of mattress for improved lumbar support and increased life span of the mattress. The majority of your body's weight rests in the centre third of the mattress where you need the most support to keep your spine in optimal alignment while relieving back pain. The pro Lumbar Support layer is also designed to resist sagging and keeps your mattress comfortable and more supportive even far boyond our 15 years warranty period.
						</p>
						<p className="cta erbaum pt-3">
							<a href="#" className="color-primary">CALL TO ACTION <i class="fa fa-caret-right ic1"></i><i class="fa fa-caret-right ic2"></i><i class="fa fa-caret-right ic3"></i></a>
						</p>
					</Col>
					<Col sm="6">
						<img src={mattress1} alt="Mattress1" width="120%" style={{marginLeft:'-100px'}}/>
					</Col>
				</Row>
			</Container>
		</section>

		<Footer />
	</>
  );
};