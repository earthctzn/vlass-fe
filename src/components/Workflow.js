import React from "react";
import Flow from '../media/WorkflowGraphic.png'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


export default function Workflow({ title, content, id }) {
  return (
    <div className={"section"}>
      <div className="section-content" id={id}>
       
        <h1>{title}</h1>
        <div id="wf-content">
          <p>{content}</p>
        </div>
        <img src={Flow} id="wflow" alt="workflow graphic"></img>
        <Container id="wflow-steps">
            <Row className="flow">
              <Col id="wf-col" md="auto" >RESEARCH</Col>
              <Col id="wf-col" md="2">PRODUCT DESIGN</Col>
              <Col id="wf-col" md="auto">DEVELOPMENT</Col>
              <Col id="wf-col" md="2">DELIVERY</Col>
              <Col id="wf-col" md="auto">MARKETING</Col>
              <Col id="wf-col-1" md="2">RESULTS</Col>
            </Row>
          </Container>
      </div>
    </div>
  );
}