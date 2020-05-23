import React from "react";
import GlassC from '../media/GlassC.png'

import Row from 'react-bootstrap/Row'

export default function Home({ title, content, id }) {
  return (
    <div className={"section"}>
      <div className="section-content" id={id}>
        <h2>{title}</h2>
        <div id="home-content" >
          <Row id="home-p" >{content}</Row>
        </div>
        <img src={GlassC} id="glass-c" alt="abstract art."></img>
      </div>
    </div>
  );
}