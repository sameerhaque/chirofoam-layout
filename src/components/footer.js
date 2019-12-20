import React from "react"
import {Link} from "gatsby"
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import twiter from "../assets/img/twiter.png"
import fb from "../assets/img/fb.png"
import youtube from "../assets/img/youtube.png"
import blank from "../assets/img/blank.png"

const Footer = () => (
	<footer className="footer py-5" style={{ backgroundColor: '#243b6a', borderRadius: '0', color: '#fff' }}>
		<Container>
			<Row>
				<Col md="3">
					<strong className="jersey space-2">CONNECT WITH US</strong>
					<ul style={{
						listStyle:'none',
						display:'flex',
						paddingLeft:'0px',
						paddingTop:'20px'
					}} >
						<li className="mr-2"><Link to="/"><img src={fb} alt="Facebook" width="35px"/></Link></li>
						<li className="mr-2"><Link to="/"><img src={blank} alt="Blank" width="35px"/></Link></li>
						<li className="mr-2"><Link to="/"><img src={twiter} alt="Twiter" width="35px"/></Link></li>
						<li className="mr-2"><Link to="/"><img src={youtube} alt="Youtube" width="35px"/></Link></li>

					</ul>
					<p style={{color:'#b2b2b2',fontSize:'12px',letterSpacing:'1px',padding:'0px', margin:'0px',lineHeight:'30px'}}>Chirofoam<sup>TM</sup> Memory Foam Mattress </p>
					<p style={{color:'#b2b2b2',fontSize:'12px',letterSpacing:'1px',padding:'0px', margin:'0px',lineHeight:'30px'}}>Rated 5/5</p>
					<p style={{color:'#b2b2b2',fontSize:'12px',letterSpacing:'1px',padding:'0px', margin:'0px',lineHeight:'30px'}}>Based on 160 retings and reviews by actual Chirofoam<sup>TM</sup> mattress owners. </p>


				</Col>
				<Col md="3" className="pl-5">
					<p style={{color:'#b2b2b2',fontSize:'12px',letterSpacing:'1px',paddingBottom:'30px', margin:'0px',lineHeight:'30px'}}>Have any Inquiries? Give us a call:</p>
					<strong className="py-3 d-block">1 (888) CHIRO-31</strong>
					<p style={{color:'#b2b2b2',fontSize:'12px',letterSpacing:'1px',paddingBottom:'20px', margin:'0px',lineHeight:'30px'}}>1 (888)244-7631</p>
					<p style={{color:'#b2b2b2',fontSize:'12px',letterSpacing:'1px',padding:'0px', margin:'0px',lineHeight:'30px'}}>Our sleep experts are on call</p>
					<p style={{color:'#b2b2b2',fontSize:'12px',letterSpacing:'1px',padding:'0px', margin:'0px',lineHeight:'30px'}}>Mon-Fri 10am - 6pm(EST)</p>
				</Col>
				<Col md="3">
					<ul style={{
						listStyle:'none',
						paddingLeft:'40px',
						paddingTop:'0px'
					}} >
						<li className="mr-2 pb-3"><Link to="./charity" style={{color:'#b2b2b2',fontSize:'12px'}}>Charity</Link></li>
						<li className="mr-2 pb-3"><Link to="./our-story" style={{color:'#b2b2b2',fontSize:'12px'}}>Our Story</Link></li>
						<li className="mr-2 pb-3"><Link to="./chiropractor-recommended" style={{color:'#b2b2b2',fontSize:'12px'}}>Chiropractor Recommended</Link></li>
						<li className="mr-2 pb-3"><Link to="./customer-service" style={{color:'#b2b2b2',fontSize:'12px'}}>Customer Service</Link></li>
						<li className="mr-2 pb-3"><Link to="./locations" style={{color:'#b2b2b2',fontSize:'12px'}}>Locations</Link></li>
						<li className="mr-2 pb-3"><Link to="./faq" style={{color:'#b2b2b2',fontSize:'12px'}}>Frequently Asked Questions</Link></li>
					</ul>
				</Col>
				<Col md="3">
					<ul style={{
						listStyle:'none',
						paddingLeft:'40px',
						paddingTop:'0px'
					}} >
						<li className="mr-2 pb-3"><Link to="./mattress-sizes" style={{color:'#b2b2b2',fontSize:'12px'}}>Mattress Sizes</Link></li>
						<li className="mr-2 pb-3"><Link to="./return-policy" style={{color:'#b2b2b2',fontSize:'12px'}}>Return Policy</Link></li>
						<li className="mr-2 pb-3"><Link to="./warranty" style={{color:'#b2b2b2',fontSize:'12px'}}>Warranty</Link></li>
						<li className="mr-2 pb-3"><Link to="./privacy-policy" style={{color:'#b2b2b2',fontSize:'12px'}}>Privacy Policy</Link></li>
						<li className="mr-2 pb-3"><Link to="./term-and-conditions" style={{color:'#b2b2b2',fontSize:'12px'}}>Terms And Conditions</Link></li>
						<li className="mr-2 pb-3"><Link to="./blogs" style={{color:'#b2b2b2',fontSize:'12px'}}>Blog</Link></li>
					</ul>
				</Col>
			</Row>
		</Container>
	</footer>
)

export default Footer;