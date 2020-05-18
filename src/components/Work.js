import React from "react";



export default function Work({ title, id }) {
  return (
    <div className={"section"}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        {/* Need to iterate over the work objects */}
      </div>
    </div>
  );
}