import React, {useState} from "react"
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import logo from "../assets/img/logo.png"

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen); 

  return (
    <div>
      <Navbar color="faded" light expand="lg">
		<Container>
			<NavbarBrand href="/"><img src={logo} alt="Chirofoam"/></NavbarBrand>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
			  <Nav className="mr-auto ml-auto" navbar>
				<NavItem>
				  <NavLink href="/components/">ORIGINAL LUXURY FIRM</NavLink>
				</NavItem>
				<NavItem>
				  <NavLink href="https://github.com/reactstrap/reactstrap">XF EXTRA FIRM</NavLink>
				</NavItem>
				<NavItem>
				  <NavLink href="https://github.com/reactstrap/reactstrap">OUR GUARENTEES</NavLink>
				</NavItem>
				<NavItem>
				  <NavLink href="https://github.com/reactstrap/reactstrap">REVIEWS</NavLink>
				</NavItem>
				<NavItem>
				  <NavLink href="/shop-chirofoam">SHOP CHIROFOAM</NavLink>
				</NavItem>           
			  </Nav>
			</Collapse>
		</Container>
	  </Navbar>
    </div>
  );
}

export default Header;