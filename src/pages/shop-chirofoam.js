import React from 'react';
import Header from "../components/header"
import Footer from "../components/footer"
import Banner from "../components/banner-shop-chirofoam"
import {Container, Row, Col, Button, Media} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import O_img1 from "../assets/img/home4.png"
import O_img2 from "../assets/img/home5.png"
import O_img3 from "../assets/img/home6.png"
import product1 from "../assets/img/product1.jpg"
import product2 from "../assets/img/product2.jpg"
import mattress1 from "../assets/img/mattress1.jpg"
import mattress3 from "../assets/img/mattress3.jpg"


export default (props) => {
  return (
	<>
		<Header />
		<Banner/>
		<section className="mt-4 mb py-4" style={{backgroundColor:'#fff'}}>
				<Row className="no-gutters">
					<Col sm="4" style={{height:'225px'}} className="position-relative overflow-hidden">
						<img src={O_img1} alt="shop_banner" width="100%" height="auto"/>
							<div className="position-absolute" style={{backgroundColor: 'rgba(6, 29, 75, 0.8)', width:'100%', height:'100%', top:'0'}}>
								<span style={{position:'absolute', top:'50%', left:'0', right:'0', color:'#fff', textAlign:'center', fontWeight:'600'}}>AENEAN SEMPER EST URNA</span>
							</div>
					</Col>
					<Col sm="4" style={{height:'225px'}} className="position-relative overflow-hidden">
						<img src={O_img2} alt="shop_banner" width="100%" height="auto"/>
							<div className="position-absolute" style={{backgroundColor: 'rgba(6, 29, 75, 0.8)', width:'100%', height:'100%', top:'0'}}>
									<span style={{position:'absolute', top:'50%', left:'0', right:'0', color:'#fff', textAlign:'center', fontWeight:'600'}}>SIT AMET GRAVIDA TORTO</span>
								</div>
					</Col>
					<Col sm="4" style={{height:'225px'}} className="position-relative overflow-hidden">
						<img src={O_img3} alt="shop_banner" width="100%" height="auto"/>
							<div className="position-absolute" style={{backgroundColor: 'rgba(6, 29, 75, 0.8)', width:'100%', height:'100%', top:'0'}}>
									<span style={{position:'absolute', top:'50%', left:'0', right:'0', color:'#fff', textAlign:'center', fontWeight:'600'}}>DONEC EROS EX</span>
								</div>
					</Col>
				</Row>
		</section>
		<section className="mt-0 mb-4 pb-5" style={{backgroundColor: '#fff'}}>
			<Container>
				<h4 className="h4 font-weight-bold text-center" style={{color:'#243B6B', fontSize:'1.8rem'}}>THE COMFORT AND SUPPORT YOU NEED FOR A BETTER SLEEP</h4>
				<p className="width-10 text-center" style={{color:'#243B6B', width:'50%', margin:'0px auto', fontSize:'1rem', fontWeight:'600', letterSpacing:'1px'}}>
					Aenean suscipit , lacus at hendererit poirta, massa sen efficitur est, quis matties eros quam in sapien.
				</p>
				<Row className="pt-5">
					<Col sm="6" className="pr-5 border-right">
						<img src={product1} alt="Product1" width="100%" />
						<h3 className="text-right font-weight-bold" style={{color:'#243B6B', lineHeight:'38px',fontSize:'1.9rem'}}>THE ORIGINAL CHIROFOAM<sup>TM</sup> MATTRESS - LUXURY FIRM</h3>
						<p className="text-right" style={{color:'#243B6B', fontSize:'0.9rem', letterSpacing:'1px'}}>
								<b>Our specilized layer of chirofoam<sup>TM</sup> lumbar support</b> provides an additional 20% of conforming support in the centre third of mattress for improved lumbar support and increased life span of the mattress. The majority of your body's weight rests in the centre third of the mattress where you need the most support to keep your spine in optimal alignment while relieving back pain. The pro Lumbar Support layer is also designed to resist sagging and keeps your mattress comfortable and more supportive even far boyond our 15 years warranty period.   </p>
						<p className="mt-4 text-right">
							<Button color="primary">CALL TO ACTION</Button>
						</p>
						<span style={{fontWeight:'600', letterSpacing:'1px', fontSize:'1.2rem', color:'#243B6b'}}>CAD $6902.00 - CAD 1090.00 </span>
					</Col>
					
					<Col sm="6" className="pl-5">
						<img src={product2} alt="Product2" width="100%" />
						<h3 className="font-weight-bold pr-5" style={{color:'#243B6B', lineHeight:'38px',fontSize:'1.9rem'}}>THE CHIROFOAM<sup>TM</sup> XF MATTRESS - EXTRA FIRM</h3>
						<p className="text-left" style={{color:'#243B6B', fontSize:'0.9rem', letterSpacing:'1px'}}>
								<b>Our specilized layer of chirofoam<sup>TM</sup> lumbar support</b> provides an additional 20% of conforming support in the centre third of mattress for improved lumbar support and increased life span of the mattress. The majority of your body's weight rests in the centre third of the mattress where you need the most support to keep your spine in optimal alignment while relieving back pain. The pro Lumbar Support layer is also designed to resist sagging and keeps your mattress comfortable and more supportive even far boyond our 15 years warranty period.   </p>
						<p className="text-white">
							<Button color="primary">CALL TO ACTION</Button>
						</p>
						<span style={{fontWeight:'600', letterSpacing:'1px', fontSize:'1.2rem', color:'#243B6b'}}>CAD $540.00 - CAD 940.00 </span>
					</Col>
				</Row>
			</Container>
		</section>
		<section className="mt-4 mb-4 py-5" style={{backgroundColor:'#182951'}}>
			<Container>
				<Row>
					<Col sm="4" className="align-middle">
						<img src={mattress3} alt="Mattress3" width="100%"/>
					</Col>
					<Col sm="8">
						<div className="text-white mb-4 mt-4 pt-3 pl-3">
							<h5 style={{fontWeight:'600', fontSize:'2rem'}}>CUSTOMER APPROVED</h5>
							<p style={{fontWeight:'600', width:'60%', letterSpacing:'1px'}}>Our customers have reported the following benefits after sleeping on there chirofoam mattress</p>
							<div className="ml-0 pt-3" style={{width:'70%'}}>
								<Media className="pb-3">
								  <Media left middle className="pr-5 h4 font-weight-bold" style={{fontSize:'2rem'}}>
									97%
								  </Media>
								  <Media body middle>
									  Improvement in sleep comfort and quality
								  </Media>
								</Media>
								<Media className="pb-3">
								  <Media left middle className="pr-5 h4 font-weight-bold" style={{fontSize:'2rem'}}>
									94%
								  </Media>
								  <Media body middle>
									  Increased energy in the morning and throughout the day
								  </Media>
								</Media>
								<Media className="pb-3">
								  <Media left middle className="pr-5 h4 font-weight-bold" style={{fontSize:'2rem'}}>
									86%
								  </Media>
								  <Media body middle>
									  Improved muscle recovery and/or relief in daliy experienced back pain
								  </Media>
								</Media>
								<Media className="pb-3">
								  <Media left middle className="pr-5 h4 font-weight-bold" style={{fontSize:'2rem'}}>
									82%
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
		<section className="mt-4 mb-4 pb-5 pt-5">
			<Container>
				<Row>
					<Col sm="5">
						<h3 className="display-5 font-weight-bold pr-5" style={{color:'#243B6B'}}>ONDIMENTUM QUIS BIBENDUM SED</h3>
						<p style={{color:'#243B6B', fontSize:'0.9rem', letterSpacing:'1px'}}>
							<b style={{color:'#243B6B', fontSize:'0.9rem'}}>Our specilized layer of chirofoam<sup>TM</sup> lumbar support</b> provides an additional 20% of conforming support in the centre third of mattress for improved lumbar support and increased life span of the mattress. The majority of your body's weight rests in the centre third of the mattress where you need the most support to keep your spine in optimal alignment while relieving back pain. The pro Lumbar Support layer is also designed to resist sagging and keeps your mattress comfortable and more supportive even far boyond our 15 years warranty period.   
						</p>
						
						<Button color="primary">CALL TO ACTION</Button>
					</Col>
					<Col sm="7">
						<img src={mattress1} alt="Mattress1" width="100%"/>
					</Col>
				</Row>
			</Container>
		</section>

		<Footer />
	</>
  );
};