import React from 'react';
import Header from "../components/header"
import Footer from "../components/footer"
import Banner from "../components/banner-shop-chirofoam"
import {Container, Row, Col, Button, Media} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import blog1 from "../assets/img/blog1.jpg"
import o_img1 from "../assets/img/home4.png"
import o_img2 from "../assets/img/home5.png"
import o_img3 from "../assets/img/home6.png"
import mycss from "../assets/css/mycss.css"

export default (props) => {
  return (
	<>
		<Header />
		<Banner/>
		<section className="mt-4 mb-4 py-4" style={{backgroundColor:'#fff'}}>
				<Row className="no-gutters">
					<Col sm="4" style={{height:'225px'}} className="position-relative overflow-hidden">
						<img src={o_img1} alt="shop_banner" width="100%" height="auto"/>
							<div className="position-absolute" style={{backgroundColor: 'rgba(6, 29, 75, 0.8)', width:'100%', height:'100%', top:'0'}}>
								<span style={{position:'absolute', top:'50%', left:'0', right:'0', color:'#fff', textAlign:'center', fontWeight:'600'}}>AENEAN SEMPER EST URNA</span>
							</div>
					</Col>
					<Col sm="4" style={{height:'225px'}} className="position-relative overflow-hidden">
						<img src={o_img2} alt="shop_banner" width="100%" height="auto"/>
							<div className="position-absolute" style={{backgroundColor: 'rgba(6, 29, 75, 0.8)', width:'100%', height:'100%', top:'0'}}>
									<span style={{position:'absolute', top:'50%', left:'0', right:'0', color:'#fff', textAlign:'center', fontWeight:'600'}}>SIT AMET GRAVIDA TORTO</span>
								</div>
					</Col>
					<Col sm="4" style={{height:'225px'}} className="position-relative overflow-hidden">
						<img src={o_img3} alt="shop_banner" width="100%" height="auto"/>
							<div className="position-absolute" style={{backgroundColor: 'rgba(6, 29, 75, 0.8)', width:'100%', height:'100%', top:'0'}}>
									<span style={{position:'absolute', top:'50%', left:'0', right:'0', color:'#fff', textAlign:'center', fontWeight:'600'}}>DONEC EROS EX</span>
								</div>
					</Col>
				</Row>
		</section>

		<Footer />
	</>
  );
};