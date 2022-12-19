import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/Createuser' activeStyle>
          Create user
          </NavLink>
          <NavLink to='/Createrooms' activeStyle>
          Create rooms
          </NavLink>
          <NavLink to='/Viewrooms' activeStyle>
          View rooms
          </NavLink>
          <NavLink to='/Viewuser' activeStyle>
          View user
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;