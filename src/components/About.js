import React from "react";
import wwd from '../media/WhatWeDoGraphic.png'


export default function About({ content }) {
  return (
    <div className={"section"}>
      <div className="section-content" id="about">
        <img src={wwd} id="wwd" alt="stock graphic"></img>
        <div id="wwd-content"></div>
        <p id="about-content">{content}</p>
      </div>
    </div>
  );
}