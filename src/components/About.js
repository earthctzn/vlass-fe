import React from "react";
import wwd from '../media/WhatWeDoGraphic.png'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function About({ content }) {
  return (
    <div className={"section"}>
      <div className="section-content" id="about">
        <img src={wwd} id="wwd" alt="stock graphic"></img>
        <Container id="wwd-content">
            <Row className="abt">
              <Col id="wwd-col-4" md="auto" >WEB DESIGN</Col>
              <Col id="wwd-col" md="auto">CONTENT CREATION</Col>
              <Col id="wwd-col" md="auto">GRAPHIC DESIGN</Col>
              <Col id="wwd-col-4" md="auto">MARKETING</Col>
            </Row>
          </Container>
        <p id="about-content">{content}</p>
      </div>
    </div>
  );
}