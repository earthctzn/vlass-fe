import React, { Component } from "react"
import { Link } from "react-scroll"
import { connect } from 'react-redux'
import { logOutUser } from './actions/userActions'
// import { Spring, animated } from 'react-spring/renderprops'
// import  hamburger  from './media/hamburger.png'

class NavBar extends Component {
    // state={
    //     toggle: true
    // }

    // onToggle = () => this.setState(state => ({ toggle: !state.toggle }))

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
                    <button id="logout-button" onClick={this.handleClick}>
                        logout
                    </button>
               </> 
            )
        }
    };

    render(){
        // const { toggle } = this.state
        return(
            <>

                {/* <Spring 
                from={{ height: toggle ? 0 : 'auto' }}
                to={{ height: toggle ? 'auto' : 0 }}
                > */}
                    {/* { props => ( */}
                        {/* <animated.div style={props}> */}
                            <nav className="nav" id="navbar">
                                <div className="nav-content">

                                    <ul className="nav-items">
                                        <li className="nav-item">
                                            <Link
                                                activeClass="active"
                                                to="welcome"
                                                spy={true}
                                                smooth={true}
                                                offset={ this.props.isLoggedIn ? -90 : -60}
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
                                                offset={-40}
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
                                                offset={-40}
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
                                                offset={-40}
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
                                                offset={65}
                                                duration= {700}
                                            >
                                                CONTACT
                                            </Link>
                                        </li>

                                        {this.renderUser()}

                                    </ul> 
                            
                                </div>
                                    {/* <button id="nav-toggle" onClick={this.onToggle}>
                                        <img id="nav-img" src={hamburger} alt="menu icon"></img>
                                    </button> */}
                            </nav>
                        {/* </animated.div>
                    )}
                </Spring> */}
            </>

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