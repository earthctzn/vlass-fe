import React from "react";
import GlassC from '../media/GlassC.png'


export default function Home({ title, id }) {
  return (
    <div className={"section"}>
      <div className="section-content" id={id}>
        <h2>{title}</h2>
        <img src={GlassC} id="glass-c" alt="abstract art."></img>
      </div>
    </div>
  );
}