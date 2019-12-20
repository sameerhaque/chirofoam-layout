import React from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import shop_banner from "../assets/img/shop-banner.png"

const Banner = () => (
	<section>
		<Container>
			<Row className="py-5">
				<Col md="7">
					<span style={{color:'#243B6B'}}>SHOP</span>
					<h2 className="font-weight-bold" style={{color:'#243B6B',fontSize:'95px',lineHeight:'85px'}}>CHIROFOAM</h2>
					<p className="lead pt-5">
					  <Button color="primary">CALL TO ACTION</Button>
					</p>
				</Col>
				<Col md="5">			
					<img src={shop_banner} alt="shop_banner" width="100%"/>
				</Col>
			</Row>
		</Container>
	</section>
)

export default Banner;