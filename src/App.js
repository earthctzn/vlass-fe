import React, { Component } from 'react'
import './App.css';
import './Responsive.css'
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
import AdminForm from './components/adminForm'

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

  loading = () => {
    if( this.props.home.loading ||
        this.props.about.loading ||
        this.props.work.loading ||
        this.props.workflow.loading ||
        this.props.contact.loading
      ) {
      return (
        <h1>Loading...</h1>
      )
    }
  }


  render(){
    this.loading()
    return(
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
              <Route exact path="/building">
                <AdminForm /> 
              </Route>
            </Switch>
        </Router>
     
        <Home
          loading={this.loading()}
          content={this.props.home.content}
          id="welcome"
        />
        <About
         loading={this.loading()}
          title={this.props.about.title}
          content={this.props.about.content}
          id="about"
        />
        <Work
          loading={this.loading()}
          id="work"
          title="WORK"
        />
        <Workflow
          loading={this.loading()}
          title={this.props.workflow.title}
          content={this.props.workflow.content}
          id="workflow"
        />
        <Contact
          loading={this.loading()}
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
    contact: state.contact,
    isLoggedIn: state.user.loggedIn
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
