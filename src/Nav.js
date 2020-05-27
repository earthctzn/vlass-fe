import React, { Component } from "react"
import { Link } from "react-scroll"
import { connect } from 'react-redux'
import { logOutUser } from './actions/userActions'

class NavBar extends Component {

    handleClick = () => {
        this.props.logOutUser( this.props.token )
    };
 
    renderUser  = () => {
        if (this.props.isLoggedIn === true){
            return (
                <>
                    <li className="nav-item">
                        Hi {this.props.user.username}
                    </li>
                    <button onClick={this.handleClick}>
                        logout
                    </button>
               </> 
            )
        }
    };

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

                        {this.renderUser()}

                    </ul> 
                </div>
            </nav>
        )
    }
};

const mapStateToProps = state => {
    return { 
        user: state.user.admin,
        isLoggedIn: state.user.loggedIn,
        token: state.token
    }
};

export default connect(mapStateToProps, {logOutUser})(NavBar);