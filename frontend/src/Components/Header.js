import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class Example extends React.Component {
  state = {
    isOpen: false
  }
  toggle = () => {
    this.setState(() => ({ isOpen: !this.state.isOpen }));
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="#">Your Store</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">All Departments</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">My Account</NavLink>
              </NavItem><NavItem>
                <NavLink href="#">Cart</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="header-tail"></div>
      </div>
    );
  }
}