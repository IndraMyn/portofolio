import React from 'react';
import { Navbar, Nav, NavItem, NavLink,  Button } from 'reactstrap';

function NavbarPartial(props) {

  return (
    <>
        <Navbar style={{background: '#242526'}} dark fixed="top">
            <Nav navbar className="navbar-style">
                <div className="form-inline">
                    <NavItem>
                        <NavLink className="mr-2" href="#about"><Button color="dark" style={{borderRadius: '20px'}} size="sm" className="btn-outline-blue" outline>About</Button></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="mr-2" href="#portofolio"><Button color="dark" style={{borderRadius: '20px'}} size="sm" className="btn-outline-blue" outline>Portofolio</Button></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="mr-2" href="#skill"><Button color="dark" style={{borderRadius: '20px'}} size="sm" className="btn-outline-blue" outline>Skill</Button></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="mr-2" href="#contact"><Button color="dark" style={{borderRadius: '20px'}} size="sm" className="btn-outline-blue" outline>Contact</Button></NavLink>
                    </NavItem>
                </div>
            </Nav>
        </Navbar>
    </>
  );
}

export default NavbarPartial;