import React from "react";



export default function Contact({ title, content, id }) {
  return (
    <div className={"section"}>
      <div className="section-content" id={id}>
        <h2>{title}</h2>
        <hr></hr>
        <h2>{content}</h2>
      </div>
    </div>
  );
}