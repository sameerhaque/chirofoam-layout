import React from "react"
import {Link} from "gatsby"
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import "../assets/css/bootstrap.min.css"

const Footer = () => (
	<footer className="footer py-4" style={{ backgroundColor: '#151F40', borderRadius: '0', color: '#fff' }}>
		<Container>
			<Row>
				<Col md="3">
					<strong>CONNECT WITH US</strong>
				</Col>
				<Col md="3">
				</Col>
				<Col md="3">
					
				</Col>
				<Col md="3">
					<Link href="#" className="text-info">Mattress Sizes</Link><br />
				</Col>
			</Row>
		</Container>
	</footer>
)

export default Footer;