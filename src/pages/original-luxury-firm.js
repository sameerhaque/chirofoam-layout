import React from 'react';
import Header from "../components/header"
import Footer from "../components/footer"
import {Container, Row, Col, Button, Media} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import O_img1 from "../assets/img/home4.png"
import O_img2 from "../assets/img/home5.png"
import O_img3 from "../assets/img/home6.png"
import product1 from "../assets/img/product1.jpg"
import product2 from "../assets/img/product2.jpg"
import mattress1 from "../assets/img/mattress1.jpg"
import mattress3 from "../assets/img/mattress3.jpg"
import warranty from "../assets/img/waranty.png"
import van from "../assets/img/van.png"
import box from "../assets/img/box.png"


export default (props) => {
  return (
	<>
		<Header />
		<section className="mt-4 mb py-4" style={{backgroundColor:'#fff'}}>
			<Container>
				<Row className="no-gutters">
					<Col sm="6">
						<img src={product1} alt="Product1" width="100%" />
						<div className="row row-cols-5 px-5 mt-5">
							<Media style={{width:'18%', height:'85px'}} className="mx-1 mb-1 overflow-hidden">
								<img src={product1} alt="Product1" width="100%" height="100%"/>
							</Media>
							<Media style={{width:'18%', height:'85px'}} className="mx-1 mb-1 overflow-hidden">
								<img src={product2} alt="Product2" width="100%" height="100%"/>
							</Media>
							<Media style={{width:'18%', height:'85px'}} className="mx-1 mb-1 overflow-hidden">
								<img src={mattress1} alt="mattress1" width="100%" height="100%" />
							</Media>
							<Media style={{width:'18%', height:'85px'}} className="mx-1 mb-1 overflow-hidden">
								<img src={mattress1} alt="mattress1" width="100%" height="100%"/>
							</Media>
							<Media style={{width:'18%', height:'85px'}} className="mx-1 mb-1 overflow-hidden">
								<img src={O_img1} alt="O_img1" width="100%" height="100%"/>
							</Media>
							<Media style={{width:'18%', height:'85px'}} className="mx-1 mb-1 overflow-hidden">
								<img src={O_img2} alt="O_img2" width="100%" height="100%"/>
							</Media>
							<Media style={{width:'18%', height:'85px'}} className="mx-1 mb-1 overflow-hidden">
								<img src={O_img3} alt="O_img3" width="100%" height="100%"/>
							</Media>
							<Media style={{width:'18%', height:'85px'}} className="mx-1 mb-1 overflow-hidden">
								<img src={product1} alt="Product1" width="100%"height="100%" />
							</Media>
							<Media style={{width:'18%', height:'85px'}} className="mx-1 mb-1 overflow-hidden">
								<img src={product2} alt="Product2" width="100%" height="100%"/>
							</Media>
							<Media style={{width:'18%', height:'85px'}} className="mx-1 mb-1 overflow-hidden">
								<img src={mattress1} alt="mattress1" width="100%" height="100%"/>
							</Media>
							<Media style={{width:'18%', height:'85px'}} className="mx-1 mb-1 overflow-hidden">
								<img src={mattress1} alt="mattress1" width="100%" height="100%"/>
							</Media>
							<Media style={{width:'18%', height:'85px'}} className="mx-1 mb-1 overflow-hidden">
								<img src={O_img1} alt="O_img1" width="100%" height="100%"/>
							</Media>
						</div>
					</Col>
					<Col sm="6" className="pl-5">	
						<h3 className="text-right font-weight-bold pb-3" style={{color:'#243B6B', lineHeight:'38px',fontSize:'1.9rem'}}>THE ORIGINAL CHIROFOAM<sup>TM</sup> MATTRESS - LUXURY FIRM</h3>
						<p style={{color:'#243B6B', letterSpacing:'1px', fontSize:'0.9rem', fontWeight:'600'}}>The Original Chirofoam Memory Foam Mattress is designed to increase muscle recovery to help keep you performing at your best. Made in Toronto, ON. Upgrade your sleep today!</p>
						<p style={{color:'#243B6B', letterSpacing:'1px', fontSize:'0.9rem', fontWeight:'600'}}>Ideal for all sleeping positions.</p>
						<p style={{color:'#243B6B', letterSpacing:'1px', fontSize:'0.9rem', fontWeight:'600'}}>Firmness sacle: 7.5/10-Luxury Firm</p>
						<p style={{color:'#243B6B', letterSpacing:'1px', fontSize:'0.9rem', fontWeight:'600'}}>Free Delivery across Canada and Continental USA.</p>
						<p style={{color:'#243B6B', letterSpacing:'1px', fontSize:'0.9rem', fontWeight:'600'}}>Usually ships within 1 - 2 business day. </p>
						<div className="d-flex text-center pt-3 pl-5">
							<Col sm="4">
								<img src={warranty} alt="warranty" width="60px" className="mb-3"/>
								<span className="d-block font-weight-bold" style={{fontSize:'0.8rem', color:'#243B6B'}}>15 YEAR WARRANTY</span>
							</Col>
							<Col sm="4">
								<img src={van} alt="van" width="60px" className="mb-3"/>
								<span className="d-block font-weight-bold" style={{fontSize:'0.8rem', color:'#243B6B'}}>FREE EXPRESS DELIVERY AND EASY RETURNS</span>
							</Col>
							<Col sm="4">
								<img src={box} alt="box" width="60px" className="mb-3"/>
								<span className="d-block font-weight-bold" style={{fontSize:'0.8rem', color:'#243B6B'}}>DELIVERED IN PORTABLE BOX</span>
							</Col>
						</div>
						<div className="row text-center mt-4 ml-0">
							<div className="col border border-secondary mr-2 p-0 py-2" style={{fontSize:'0.7rem', color:'#243B6B'}}>KALI KING</div>
							<div className="col border border-secondary mr-2 p-0 py-2" style={{fontSize:'0.7rem', color:'#243B6B'}}>KING</div>
							<div className="col border border-secondary mr-2 p-0 py-2" style={{fontSize:'0.7rem', color:'#243B6B'}}>QUEEN</div>
							<div className="col border border-secondary mr-2 p-0 py-2" style={{fontSize:'0.7rem', color:'#243B6B'}}>DOUBLE FULL</div>
							<div className="col border border-secondary mr-2 p-0 py-2" style={{fontSize:'0.7rem', color:'#243B6B'}}>SINGLE/TWIN</div>
							<div className="col border border-secondary mr-2 p-0 py-2" style={{fontSize:'0.7rem', color:'#243B6B'}}>TWIN XL</div>
						</div>
						<p className="mt-4" style={{color:'#243B6B', fontSize:'0.9rem', letterSpacing:'1px'}}>
							<b>Our specilized layer of chirofoam<sup>TM</sup> lumbar support</b> provides an additional 20% of conforming support in the centre third of mattress for improved lumbar support and increased life span of the mattress. The majority of your body's weight rests in the centre third of the mattress where you need the most support to keep your spine in optimal alignment while relieving back pain.
						</p>
					</Col>
				</Row>
			</Container>
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
							<b style={{color:'#243B6B', fontSize:'0.9rem'}}>Our specilized layer of chirofoam<sup>TM</sup> lumbar support</b> provides an additional 20% of conforming support in the centre third of mattress for improved lumbar support and increased life span of the mattress. The majority of your body's weight rests in the centre third of the mattress where you need the most support to keep your spine in optimal alignment while relieving back pain. 
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