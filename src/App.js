import React, { Component } from 'react'
import './App.css';
import NavBar from './Nav'
import Home from './components/Home'
import Workflow from './components/Workflow'
import Work from './components/Work'
import Contact from './components/Contact'
import About from './components/About'
import SignupForm from './components/signupForm'

import { connect } from 'react-redux'

import { getToken } from './actions/tokenActions'
import { getUser } from './actions/userActions'
import { fetchAbout } from './actions/aboutActions'
import { fetchHome } from './actions/homeActions'
import { fetchWork } from './actions/workActions'
import { fetchWorkflow } from './actions/workflowActions'
import { fetchContact } from './actions/contactActions'

import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';
import LoginForm from './components/loginForm'

class App extends Component {


  componentDidMount() {
    this.props.getToken()
    this.props.getUser()
    this.props.fetchHome()
    this.props.fetchAbout()
    this.props.fetchWork()
    this.props.fetchWorkflow()
    this.props.fetchContact()
  }

  render(){
    return (
      <>
        <Router>
          <NavBar/>
            <Switch>
              <Route exact path="/newness">
                <SignupForm />
              </Route>
              <Route exact path="/boss">
                <LoginForm />
              </Route>
            </Switch>
        </Router>
     
        <Home
          content={this.props.home.content}
          id="welcome"
        />
        <About
          title={this.props.about.title}
          content={this.props.about.content}
          id="about"
        />
        <Work
          id="work"
          title="WORK"
          company={this.props.work.company}
          job={this.props.work.job}
        />
        <Workflow
          title={this.props.workflow.title}
          content={this.props.workflow.content}
          id="workflow"
        />
        <Contact
          title={this.props.contact.title}
          content={this.props.contact.content}
          id="contact"
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    home: state.home,
    about: state.about,
    work: state.work,
    workflow: state.workflow,
    contact: state.contact
  }
}

export default connect(
  mapStateToProps, {
    getToken, 
    getUser, 
    fetchAbout,
    fetchHome,
    fetchWork,
    fetchWorkflow,
    fetchContact
  })(App);
