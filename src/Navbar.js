import React from 'react';
import logoSmall from './logoSmall.png';
import fb from './fbCir.svg';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';
  import 'bootstrap/dist/css/bootstrap.css';
  import './Navbar.sass';
  import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar1 extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="menu" color="dark" dark expand="md">
          <NavbarBrand href="/"><img src={logoSmall} alt="logo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <Link
                activeClass="active"
                to="Prihlaska"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
            >
              <NavItem onClick={this.toggle}>
                <NavLink className="lineThrough" href="#sec1">PŘIHLÁŠKA</NavLink>
              </NavItem>

              </Link>
              <Link
                activeClass="active"
                to="Informace"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
            >
              <NavItem onClick={this.toggle}>
                <NavLink className="lineThrough">INFORMACE</NavLink>
              </NavItem>
              </Link>
              <Link
                activeClass="active"
                to="Instruktori"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
            >
              <NavItem onClick={this.toggle}>
                <NavLink  className="lineThrough">INSTRUKTOŘI</NavLink>
              </NavItem>
              </Link>
              <Link
                activeClass="active"
                to="Program"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
            >
              <NavItem onClick={this.toggle}>
                <NavLink  className="lineThrough">PROGRAM</NavLink>
              </NavItem>
              </Link>
              <Link
                activeClass="active"
                to="Partneri"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
            >
              <NavItem onClick={this.toggle}>
                <NavLink  className="lineThrough">PARTNEŘI</NavLink>
              </NavItem>
              </Link>
              <Link
                activeClass="active"
                to="Kontakt"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
            >
              <NavItem onClick={this.toggle}>
                <NavLink className="lineThrough">KONTAKT</NavLink>
              </NavItem>
              </Link>
              <NavItem>
                <NavLink className="fbIcon">
                  <a href="https://www.facebook.com/pg/studentskaunieutb/events/" target="_blank">
                    <img src={fb} alt="fb"/>
                  </a>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}