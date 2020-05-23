import React,  { Component } from "react";

class Work extends Component {

  renderWork = () => {
   return (
      <div>
        <h2>{this.props.company}</h2>
        <p>{this.props.content}</p>
      </div>
    ) 
  }

  render() {
    return (
      <div className={"section"}>
        <div className="section-content" id={this.props.id}>
          <h1>{this.props.title}</h1>
          {this.renderWork()}
          
        </div>
      </div>
    );
  }

}

export default Work