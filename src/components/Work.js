import React,  { Component } from "react";
import { connect } from "react-redux"

class Work extends Component {

  renderWork = (props) => {
    return props.history.workArr.map( work => {
      return (
        <div key={work.id}>
          <h2>{work.company}</h2>
          <p>{work.job}</p>
        </div>
      ) 
    })

  }

  render() {
    return (
      <div className={"section"}>
        <div className="section-content" id={this.props.id}>
          <h1>{this.props.title}</h1>
          {this.props.loading}
          {this.renderWork(this.props)}
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return{
    history: state.work
  }
}

export default connect(mapStateToProps)(Work)