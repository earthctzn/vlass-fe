import React from "react";



export default function Contact({ title, content, id, loading }) {
  return (
    <div className={"section"}>
      <div className="section-content" id={id}>
        {loading}
        <h1>{title}</h1>
        <hr></hr>
        <h2>{content}</h2>
      </div>
    </div>
  );
}