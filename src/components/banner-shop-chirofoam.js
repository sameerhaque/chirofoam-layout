import React from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import shop_banner from "../assets/img/shop-banner.png"

const Banner = () => (
	<section>
		<Container>
			<Row className="py-5">
				<Col md="7">
					<span className="erbaum-bold color-primary space-1">SHOP</span>
					<h2 className="erbaum-bold color-primary" style={{fontSize:'95px',lineHeight:'85px'}}>CHIROFOAM</h2>
					<p className="cta erbaum pt-5">
							<a href="#" className="color-primary">CALL TO ACTION <i class="fa fa-caret-right ic1"></i><i class="fa fa-caret-right ic2"></i><i class="fa fa-caret-right ic3"></i></a>
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