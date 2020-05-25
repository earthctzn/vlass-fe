import React, { Component } from "react"
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

        )
    }
}

export default NavBar