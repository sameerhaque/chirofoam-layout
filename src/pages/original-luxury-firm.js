import React from 'react';
import Header from "../components/header"
import Footer from "../components/footer"
import {Container, Row, Col, Button, Media} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import "../assets/css/mycss.css"
import product1 from "../assets/img/product1.jpg"
import warranty from "../assets/img/waranty.png"
import van from "../assets/img/van.png"
import box from "../assets/img/box.png"
import icon1 from "../assets/img/ic1.png"
import icon2 from "../assets/img/ic2.png"
import icon3 from "../assets/img/ic3.png"
import icon4 from "../assets/img/ic4.png"
import us from "../assets/img/us.png"
import eco from "../assets/img/eco.png"
import confidence from "../assets/img/confidence.png"

import ol1 from "../assets/img/ol1.jpg"
import ol2 from "../assets/img/ol2.jpg"
import ol3 from "../assets/img/ol3.jpg"
import ol4 from "../assets/img/ol4.jpg"
import ol5 from "../assets/img/ol5.jpg"
import ol6 from "../assets/img/ol6.jpg"
import ol7 from "../assets/img/ol7.jpg"
import ol8 from "../assets/img/ol8.jpg"
import ol9 from "../assets/img/ol9.jpg"




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
								<img src={ol1} alt="ol1" width="85px" height="100%"/>
							</Media>
							<Media style={{width:'18%', height:'85px'}} className="mx-1 mb-1 overflow-hidden">
								<img src={ol2} alt="ol2" width="85px" height="100%"/>
							</Media>
							<Media style={{width:'18%', height:'85px'}} className="mx-1 mb-1 overflow-hidden">
								<img src={ol3} alt="ol3" width="85px" height="100%" />
							</Media>
							<Media style={{width:'18%', height:'85px'}} className="mx-1 mb-1 overflow-hidden">
								<img src={ol4} alt="ol4" width="85px" height="100%"/>
							</Media>
							<Media style={{width:'18%', height:'85px'}} className="mx-1 mb-1 overflow-hidden">
								<img src={ol5} alt="ol5" width="85px" height="100%"/>
							</Media>
							<Media style={{width:'18%', height:'85px'}} className="mx-1 mb-1 overflow-hidden">
								<img src={ol6} alt="ol6" width="85px" height="100%"/>
							</Media>
							<Media style={{width:'18%', height:'85px'}} className="mx-1 mb-1 overflow-hidden">
								<img src={ol7} alt="ol7" width="85px" height="100%"/>
							</Media>
							<Media style={{width:'18%', height:'85px'}} className="mx-1 mb-1 overflow-hidden">
								<img src={ol8} alt="ol8" width="85px" height="100%" />
							</Media>
							<Media style={{width:'18%', height:'85px'}} className="mx-1 mb-1 overflow-hidden">
								<img src={ol9} alt="ol9" width="85px" height="100%"/>
							</Media>
							<Media style={{width:'18%', height:'85px'}} className="mx-1 mb-1 overflow-hidden">
								<img src={ol1} alt="ol1" width="85px" height="100%"/>
							</Media>
							<Media style={{width:'18%', height:'85px'}} className="mx-1 mb-1 overflow-hidden">
								<img src={ol2} alt="ol2" width="85px" height="100%"/>
							</Media>
							<Media style={{width:'18%', height:'85px'}} className="mx-1 mb-1 overflow-hidden">
								<img src={ol3} alt="ol3" width="85px" height="100%" />
							</Media>
						</div>
					</Col>
					<Col sm="6" className="pl-5">	
						<h3 className="font-weight-bold pb-3" style={{color:'#243B6B', lineHeight:'38px',fontSize:'1.9rem'}}>THE ORIGINAL CHIROFOAM<sup>TM</sup> MATTRESS - LUXURY FIRM</h3>
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
							<div className="col border border-secondary mr-2 p-0 py-2" style={{fontSize:'0.7rem', color:'#243B6B'}}>CALI KING</div>
							<div className="col border border-secondary mr-2 p-0 py-2" style={{fontSize:'0.7rem', color:'#243B6B'}}>KING</div>
							<div className="col border border-secondary mr-2 p-0 py-2" style={{fontSize:'0.7rem', color:'#243B6B'}}>QUEEN</div>
							<div className="col border border-secondary mr-2 p-0 py-2" style={{fontSize:'0.7rem', color:'#243B6B'}}>DOUBLE FULL</div>
							<div className="col border border-secondary mr-2 p-0 py-2" style={{fontSize:'0.7rem', color:'#243B6B'}}>SINGLE/TWIN</div>
							<div className="col border border-secondary mr-2 p-0 py-2" style={{fontSize:'0.7rem', color:'#243B6B'}}>TWIN XL</div>
						</div>
						<p className="mt-4" style={{color:'#243B6B', fontSize:'0.9rem', letterSpacing:'1px'}}>
							<b>Our specilized layer of chirofoam<sup>TM</sup> lumbar support</b> provides an additional 20% of conforming support in the centre third of mattress for improved lumbar support and increased life span of the mattress. The majority of your body's weight rests in the centre third of the mattress where you need the most support to keep your spine in optimal alignment while relieving back pain.
						</p>
						<p className="lead text-right pt-5">
						  <Button color="primary">CALL TO ACTION</Button>
						</p>
					</Col>
				</Row>
			</Container>
		</section>
		<section>
			<div style={{backgroundColor:'#243B6B'}} className="py-5">
				<Container>
					<Row className="pt-5">
						<div style={{width:'100%'}}>
							<h5 className="text-center text-white pb-5" style={{fontWeight:'600', fontSize:'2rem'}}>ONDIMENTUM QUISBIBENDUM SED</h5>
						</div>
						<Col sm="6">
							<Media className="px-5 pb-5">
								  <Media left middle>
										<img src={icon1} alt="icon1" width="85px"/>
								  </Media>
								  <Media body middle className="pl-3 text-white">
									  <h4 className="font-weight-bold" style={{fontSize:'18px'}}>BACKED BYSCIENCE</h4>
									  <p style={{letterSpacing:'1px', fontSize:'14px'}}>Created by experts after testing it with date by the Sleep To Live institute whose research is based on profiling over 10m people. Recommended by Chiropractors based on key elements of conformity. </p>
								  </Media>
							</Media>
						</Col>
						<Col sm="6">
							<Media className="px-5 pb-5">
								  <Media left middle>
										<img src={icon2} alt="icon2" width="85px"/>
								  </Media>
								  <Media body middle className="pl-3 text-white">
									  <h4 className="font-weight-bold" style={{fontSize:'18px'}}>BACKED BYSCIENCE</h4>
									  <p style={{letterSpacing:'1px', fontSize:'14px'}}>Created by experts after testing it with date by the Sleep To Live institute whose research is based on profiling over 10m people. Recommended by Chiropractors based on key elements of conformity. </p>
								  </Media>
							</Media>
						</Col>
						<Col sm="6">
							<Media className="px-5 pb-5">
								  <Media left middle>
										<img src={icon4} alt="icon4" width="85px"/>
								  </Media>
								  <Media body middle className="pl-3 text-white">
									  <h4 className="font-weight-bold" style={{fontSize:'18px'}}>BACKED BYSCIENCE</h4>
									  <p style={{letterSpacing:'1px', fontSize:'14px'}}>Created by experts after testing it with date by the Sleep To Live institute whose research is based on profiling over 10m people. Recommended by Chiropractors based on key elements of conformity. </p>
								  </Media>
							</Media>
						</Col>
						<Col sm="6">
							<Media className="px-5 pb-5">
								  <Media left middle>
										<img src={icon3} alt="icon3" width="85px"/>
								  </Media>
								  <Media body middle className="pl-3 text-white">
									  <h4 className="font-weight-bold" style={{fontSize:'18px'}}>BACKED BYSCIENCE</h4>
									  <p style={{letterSpacing:'1px', fontSize:'14px'}}>Created by experts after testing it with date by the Sleep To Live institute whose research is based on profiling over 10m people. Recommended by Chiropractors based on key elements of conformity. </p>
								  </Media>
							</Media>
						</Col>
					</Row>
				</Container>
			</div>
		</section>
		<section>
			<Container>
				<Row className="py-5 my-5">
					<Media className="px-5 mb-1">
						  <Media left middle>
							<h5 className="text-left pb-0" style={{fontWeight:'700', fontSize:'2rem', color:'#243B6B'}}>HEADING</h5>
							<p style={{marginBottom:'0px', letterSpacing:'1px', color:'#243B6B',paddingTop:'30px', lineHeight:'30px'}}>CertiPUR-US® approved foams are made without ozone depleters, made without PBDE flame retardants made without mercury, lead and other heavy metals, made without formaldehyde. </p>	
						  </Media>
						  <Media body middle className="pl-4 pb-3">
							  <img src={us} alt="us" width="150px"/>
						  </Media>
					</Media>
					<Media className="px-5 mb-1">
						  <Media left middle>
							<p style={{marginBottom:'0px', letterSpacing:'1px', color:'#243B6B',paddingTop:'30px', lineHeight:'30px'}}>Eco institut tested for emission analysis in the test chamber according to ISO 16000. compound analyses for heavy metals. AOX/EOX, biocides, phthalates, flame retatdants etc... odour testing according to VDA, toxicological and ecological expertise.</p>	
						  </Media>
						  <Media body middle className="pl-4 pb-3">
							  <img src={eco} alt="eco" width="150px"/>
						  </Media>
					</Media>
					<Media className="px-5 mb-1">
						  <Media left middle>
							<p style={{marginBottom:'0px', letterSpacing:'1px', color:'#243B6B',paddingTop:'30px', lineHeight:'30px'}}>Confidence In Textile Oeko-Tex® standard 100 certified provide extensive testing on the fabrics to ensure that no substances are present that could be harmful to human. Oeko-Tex® standard 100 is an international certification that set limits for over 100 harmful chemicals, substances, and emissions in textiles.</p>	
						  </Media>
						  <Media body middle className="pl-4 pb-3">
							  <img src={confidence} alt="confidence" width="150px"/>
						  </Media>
					</Media>
				</Row>
			</Container>
		</section>
		<section className="mt-4 py-5 max-support bg-image">
			<Container>
				<Row className="">
					<Col sm="4">
						<h2 className="display-3 font-weight-bold text-white">MAX SUPPORT MAX RESULTS</h2>
						<p className="text-white">
							<Button color="primary">CALL TO ACTION</Button>
						</p>
					</Col>
				</Row>
			</Container>
		</section>

		<Footer />
	</>
  );
};