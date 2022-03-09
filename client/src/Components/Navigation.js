import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  NavbarText,
  DropdownMenu,
} from "reactstrap";
import logo from "./../p-logo.png";

export default function Navigation() {
  return (
    <div>
      <Navbar color="white" expand="md" light>
        <NavbarBrand href="/">
          <img className="logo" src={logo} alt="Logo" />
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="nav-list" navbar>
            <NavItem>
              <NavLink href="/all-recipes">All Recipes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/grocery-list">My Grocery List</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/saved-recipes">Saved Recipes</NavLink>
            </NavItem>
            {/* <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Discover
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}
