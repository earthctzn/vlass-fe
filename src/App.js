import React, {Component} from 'react';
import './App.css';
import NavBar from './Nav'
import Home from './components/Home'
import Workflow from './components/Workflow'
import Work from './components/Work'
import Contact from './components/Contact'
import About from './components/About'

import { connect } from 'react-redux';

import { getToken } from './actions/tokenActions';
import { getUser } from './actions/userActions';


class App extends Component {


  componentDidMount() {
    this.props.getToken()
    this.props.getUser()
  }

  render(){
    return (
      <>
        <NavBar/>
     
        <Home
          title="VLASS"
          content="BREAKING THE GLASS CEILING TO UNLOCK YOUR POTENTIAL"
          id="welcome"
        />
        <About
          title="HELLO, WE ARE VLASS."
          content="AT VLASS WE WORK ON TRANSFORMING YOUR BUSINESS THROUGH WEB DESIGN, CONTENT CREATION, GRAPHIC DESIGN AND MARKETING TO PREPARE YOUR BUSINESS FOR THE FUTURE."
          id="about"
        />
        <Work
          id="work"
          title="WORK"
          company="Facebook"
          job="I showed them how to run their business."
        />
        <Workflow
          title="WORKFLOW"
          content="THESE ARE OUR STEPS TO MAKE SURE WE DELIVER RESULTS"
          id="workflow"
        />
        <Contact
          title="CONTACT"
          content="VINCENT@VLASS.CO"
          id="contact"
        />
      </>
    );
  }
}


export default connect(null, {getToken, getUser})(App);
