import React, { Component } from "react"
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
import { Link } from "react-scroll"

class NavBar extends Component {
 
    
    render(){
        return(
            <nav className="nav" id="navbar">
                <div className="nav-content">
                    <ul className="nav-items">
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="welcome"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {700}
                            >
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration= {700}
                            >
                                WHAT WE DO
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="work"
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration= {700}
                            >
                                WORK
                            </Link> 
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="workflow"
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration= {700}
                            >
                                WORKFLOW
                            </Link> 
                        </li>

                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration= {700}
                            >
                                CONTACT
                            </Link> 
                        </li>
                    </ul>
                </div>
            </nav>
        //     <Navbar fixed="top" collapseOnSelect expanded="false" bg="light" variant="light">
        //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //     <Navbar.Collapse id="responsive-navbar-nav">
        //         <Nav className="nav-links">
        //             <Nav.Link href="/about">What We Do</Nav.Link>
        //             <Nav.Link href="/work">Work</Nav.Link>
        //             <Nav.Link href="/workflow">Workflow</Nav.Link>
        //             <Nav.Link href="/contact">Contact</Nav.Link>
        //         </Nav>
        //     </Navbar.Collapse>

        //   </Navbar>

        )
    }
}

export default NavBar