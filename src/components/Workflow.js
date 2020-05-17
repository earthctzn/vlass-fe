import React from "react";
import Flow from '../media/WorkflowGraphic.png'


export default function Workflow({ title, id }) {
  return (
    <div className={"section"}>
      <div className="section-content" id={id}>
        <h2>{title}</h2>
        <img src={Flow} id="wflow" alt="workflow graphic"></img>
      </div>
    </div>
  );
}