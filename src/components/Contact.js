import React from "react";

function Mailto( email ) {
  return (
    <a id="contact-a" href={`mailto:${email}`}>{email}</a>
  );
}

export default function Contact({ title, content, id, loading }) {
  return (
    <div className={"section"}>
      <div className="section-content" id={id}>
        {loading}
        <h1 id="contact-h1">{title}</h1>
        <div id="contact-bar"></div>
        <h2 id="contact-h2">
          {Mailto(content)}
        </h2>
      </div>
    </div>
  );
}