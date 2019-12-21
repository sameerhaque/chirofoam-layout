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
import warranty from "../assets/img/waranty.png"
import van from "../assets/img/van.png"
import box from "../assets/img/box.png"
import icon1 from "../assets/img/ic1.png"
import icon2 from "../assets/img/ic2.png"
import icon3 from "../assets/img/ic3.png"
import icon4 from "../assets/img/ic4.png"


export default (props) => {
  return (
	<>
		<Header />
		<section className="mt-4 mb py-4" style={{backgroundColor:'#fff'}}>
			<Container>
				<Row className="no-gutters">
					<Col sm="6">
						<img src={product2} alt="Product2" width="100%" />
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
					<Col sm="6" className="pl-5 color-primary">	
						<h3 className="erbaum-bold pb-3 color-primary">THE CHIROFOAM<sup style={{fontSize:'16px'}}>TM</sup> XF MATTRESS - EXTRA FIRM</h3>
						<p className="filson-pro-reg space-1" style={{width:'75%', fontSize:'14px'}}>Introducing the new Chirofoam<sup>TM</sup> XF Memory Foam mattress. An extra firm mattress designed for maximum support. Made in Toronto, ON.</p>
						<p className="filson-pro-reg space-1" style={{width:'75%', fontSize:'14px'}}>Upgrade your sleep today!</p>
						<p className="filson-pro-reg space-1" style={{width:'75%', fontSize:'14px'}}>Ideal for back and stomach sleepers.</p>
						<p className="filson-pro-reg space-1" style={{width:'75%', fontSize:'14px'}}>Firmness sacle: 10/10-Extra Firm</p>
						<div className="d-flex text-center pt-3 pl-5">
							<Col sm="4">
								<img src={warranty} alt="warranty" width="60px" className="mb-3"/>
								<span className="d-block erbaum-bold" style={{fontSize:'0.8rem'}}>15 YEAR WARRANTY</span>
							</Col>
							<Col sm="4">
								<img src={van} alt="van" width="60px" className="mb-3"/>
								<span className="d-block erbaum-bold" style={{fontSize:'0.8rem'}}>FREE EXPRESS DELIVERY AND EASY RETURNS</span>
							</Col>
							<Col sm="4">
								<img src={box} alt="box" width="60px" className="mb-3"/>
								<span className="d-block erbaum-bold" style={{fontSize:'0.8rem'}}>DELIVERED IN PORTABLE BOX</span>
							</Col>
						</div>
						<div className="row text-center mt-4 ml-0">
							<div className="col border mr-2 p-0 py-2" style={{fontSize:'0.7rem'}}>CALI KING</div>
							<div className="col border mr-2 p-0 py-2" style={{fontSize:'0.7rem'}}>KING</div>
							<div className="col border mr-2 p-0 py-2" style={{fontSize:'0.7rem'}}>QUEEN</div>
							<div className="col border mr-2 p-0 py-2" style={{fontSize:'0.7rem'}}>DOUBLE FULL</div>
							<div className="col border mr-2 p-0 py-2" style={{fontSize:'0.7rem'}}>SINGLE/TWIN</div>
							<div className="col border mr-2 p-0 py-2" style={{fontSize:'0.7rem'}}>TWIN XL</div>
						</div>
						<p className="mt-4 color-primary proxima-r" style={{fontSize:'0.9rem'}}>
                           <b className="proxima-eb">Our specilized layer of chirofoam<sup style={{fontSize:'7px'}}>TM</sup> lumbar support</b> provides an additional 20% of conforming support in the centre third of mattress for improved lumbar support and increased life span of the mattress. The majority of your body's weight rests in the centre third of the mattress where you need the most support to keep your spine in optimal alignment while relieving back pain.
						</p>
						<p className="cta erbaum">
							<a href="#" className="color-primary">CALL TO ACTION <i class="fa fa-caret-right ic1"></i><i class="fa fa-caret-right ic2"></i><i class="fa fa-caret-right ic3"></i></a>
						</p>
					</Col>
				</Row>
			</Container>
		</section>
		<section>
			<div className="py-5 feature bg-image">
				<div className="card-layer"></div>
				<Container>
					<Row className="pt-5">
						<div style={{width:'100%'}}>
							<h4 className="lead-text-font text-white erbaum-bold display-5 position-relative text-center pb-5">ONDIMENTUM QUISBIBENDUM SED</h4>
						</div>
						<Col sm="6">
							<Media className="px-5 pb-5">
								  <Media left middle>
										<img src={icon1} alt="icon1" width="85px"/>
								  </Media>
								  <Media body middle className="pl-3 text-white">
									  <h4 className="erbaum-bold" style={{fontSize:'18px'}}>BACKED BYSCIENCE</h4>
									  <p className="proxima-r space-1" style={{fontSize:'14px'}}>Created by experts after testing it with date by the Sleep To Live institute whose research is based on profiling over 10m people. Recommended by Chiropractors based on key elements of conformity. </p>
								  </Media>
							</Media>
						</Col>
						<Col sm="6">
							<Media className="px-5 pb-5">
								  <Media left middle>
										<img src={icon2} alt="icon2" width="85px"/>
								  </Media>
								  <Media body middle className="pl-3 text-white">
									  <h4 className="erbaum-bold" style={{fontSize:'18px'}}>BACKED BYSCIENCE</h4>
									  <p className="proxima-r space-1" style={{fontSize:'14px'}}>Created by experts after testing it with date by the Sleep To Live institute whose research is based on profiling over 10m people. Recommended by Chiropractors based on key elements of conformity. </p>
								  </Media>
							</Media>
						</Col>
						<Col sm="6">
							<Media className="px-5 pb-5">
								  <Media left middle>
										<img src={icon4} alt="icon4" width="85px"/>
								  </Media>
								  <Media body middle className="pl-3 text-white">
									  <h4 className="erbaum-bold" style={{fontSize:'18px'}}>BACKED BYSCIENCE</h4>
									  <p className="proxima-r space-1" style={{fontSize:'14px'}}>Created by experts after testing it with date by the Sleep To Live institute whose research is based on profiling over 10m people. Recommended by Chiropractors based on key elements of conformity. </p>
								  </Media>
							</Media>
						</Col>
						<Col sm="6">
							<Media className="px-5 pb-5">
								  <Media left middle>
										<img src={icon3} alt="icon3" width="85px"/>
								  </Media>
								  <Media body middle className="pl-3 text-white">
									  <h4 className="erbaum-bold" style={{fontSize:'18px'}}>BACKED BYSCIENCE</h4>
									  <p className="proxima-r space-1" style={{fontSize:'14px'}}>Created by experts after testing it with date by the Sleep To Live institute whose research is based on profiling over 10m people. Recommended by Chiropractors based on key elements of conformity. </p>
								  </Media>
							</Media>
						</Col>
					</Row>
				</Container>
			</div>
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
		<section className="rating bg-image">
			<div className="card-layer"></div>
			<Container>
				<Row>
					<div className="position-absolute card-content">
						<h4 className="lead-text-font text-white erbaum-bold display-5 text-center">4 OUT OF 5 CONSUMERS SERVEYED SAID CHIROFOAM<sup>TM</sup> IS MORE COMFORTABLE COMPARED TO OTHER COMFORTABLE BEST SELLING MATTRESS BRANDS.</h4>
					</div>
				</Row>
			</Container>
		</section>
		<Footer />
	</>
  );
};