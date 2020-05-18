import React, {Component} from 'react';
import './App.css';
import NavBar from './Nav'
import Home from './components/Home'
import Workflow from './components/Workflow'
import Work from './components/Work'
import Contact from './components/Contact'
import About from './components/About'
// import Container from 'react-bootstrap/Container'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import wflow from './media/WorkflowGraphic.png'

// import GlassC from './media/GlassC.png'

class App extends Component {
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
          content="THOSDFOIUFLKSdjf alksd jfao9sufal ksdjfalk dsjf lkajsdflka jsdflkja sdlfkjas dlkjasd;lfkjasld kfjalskdjfa lsdkfjalsd fkjsouertlkndvpoiuerpo tiuwerpo tiuqwtoijs lkfnvbowi uertiowuer tgkwnmdfbliwj oeirtuwoeirjt w'ldkfnb[oius whroitjw lertqw"
          id="about"
        />
        <Work
          title="WORK"
          id="work"
        />
        <Workflow
          title="WORKFLOW"
          content="THESE ARE OUR STEPS TO MAKE SURE WE DELIVER RESULTS"
          id="workflow"
        />
        <Contact
          title="CONTACT"
          content="vincent@vlass.co"
          id="contact"
        />

        {/* <Container id="home" fluid="md">
          <h2>BREAKING THE GLASS CEILING TO UNLOCK YOUR POTENTIAL</h2>
          <img src={GlassC}  id="glass-c"></img>
        </Container>
        <Container id="about" fluid="md">
          <h1>What We Do</h1>
        </Container>
        <Container id="work" fluid="md">
          <h1>Work</h1>
        </Container>
        <Container id="workflow" fluid="md">
          <h1 id="wfheader">Workflow</h1>
          <br></br>
          <h2>These are our steps to make sure we deliver results</h2>
          <img id="wflow" src={wflow} alt="workflow graphic"/>
          <Container id="wflow-steps" >
            <Row className="flow">
              <Col md="auto">Research</Col>
              <Col md="2">Product Design</Col>
              <Col md="auto">Development</Col>
              <Col md="2">Delivery</Col>
              <Col md="2">Marketing</Col>
              <Col md="auto">Results</Col>
            </Row>
          </Container>
        </Container>
        <Container id="contact" fluid="md">
          <h1>Contact</h1>
        </Container> */}
      </>
    );
  }
}

export default App;
