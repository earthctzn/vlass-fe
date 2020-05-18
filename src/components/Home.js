import React from "react";
import GlassC from '../media/GlassC.png'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function Home({ title, content, id }) {
  return (
    <div className={"section"}>
      <div className="section-content" id={id}>
        <h2>{title}</h2>
        <Container>
          <Row id="home-p" >{content}</Row>
        </Container>
        <img src={GlassC} id="glass-c" alt="abstract art."></img>
      </div>
    </div>
  );
}