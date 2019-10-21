import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

/**
 * import { Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button,
Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
 */

export default function Navigation() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark">
                <Navbar.Brand as={NavLink} to="/">React</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link exact as={NavLink} to='/'>Home</Nav.Link>
                        <Nav.Link as={NavLink} to='/login'>Login</Nav.Link>
                        <Nav.Link as={NavLink} to='/redux-example'>Redux example</Nav.Link>
                        {/* <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
                        <Nav.Link as={NavLink} to='/common-two'>Array Route 2</Nav.Link>
                        <Nav.Link as={NavLink} to='/topics'>Topics</Nav.Link>
                        <Nav.Link as={NavLink} to='/dashboard'>Dashboard</Nav.Link>
                        <Nav.Link as={NavLink} to='/redirect'>Redirect</Nav.Link>
                        <NavDropdown title="Protected" id="collasible-nav-dropdown">
                            <NavDropdown.Item exact as={NavLink} to="/protected">Protected</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/private">Private</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/private/100">Private/param</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    {/* <Nav>
                        <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
