import React from "react";
import GlassC from '../media/GlassC.png'
import Logo from '../media/Logo.png'

import Row from 'react-bootstrap/Row'

export default function Home({ content, id, loading}) {
  return (
    
    <div className={"section"}>
      
      <div className="section-content" id={id}>
        <img src={Logo} id="logo" alt="company logo with the name VLASS" ></img>
          {loading}
          <Row id="home-p" >{content}</Row>
        <img src={GlassC} id="glass-c" alt="abstract art."></img>
      </div>
    </div>
  );
}