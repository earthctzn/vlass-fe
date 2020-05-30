import React from "react";
import wwd from '../media/WhatWeDoGraphic.png'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function About({ title, content, loading }) {
  return (
    <div className={"section"}>
      <Container className="section-content" id="about">
        <img src={wwd} id="wwd" alt="stock graphic"></img>
        <Container id="wwd-content" >
            {loading}
            <Row className="abt">
              <Col id="wwd-col" md="auto" >WEB DESIGN</Col>
              <Col id="wwd-col" md="auto">CONTENT CREATION</Col>
              <Col id="wwd-col" md="auto">GRAPHIC DESIGN</Col>
              <Col id="wwd-col" md="auto">MARKETING</Col>
            </Row>
          </Container>
        <h1 id="wwd-h1">{title}</h1>
        <p id="about-content">{content}</p>
      </Container>
    </div>
  );
}