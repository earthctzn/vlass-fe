import React,  { Component } from "react";
import { connect } from "react-redux"

class Work extends Component {
  constructor(props){
    super(props)
    this.state= {
      company: '',
      job: '',
      editing: false,
      creating: false
    }
  }

  handleInputChange = event => {
    console.log(event.target.id)
    this.setState({
        [event.target.id]: event.target.value
    })
}

  handleClick = (e) => {
    if (e.target.id === 'editbtn') {
      this.setState({
        editing: true
      })
    }
    if (e.target.id === 'newbtn') {
      this.setState({
        creating: true
      })
    }

  }

  renderWork = (props) => {
    return props.history.workArr.map( work => {
      return (
        <div key={work.id}>
          {this.state.editing ?
          <input
              className="login-input"
              id={work.company}
              type="text" 
              placeholder={work.company}
              value={this.state.company}
              onChange={e => this.handleInputChange(e)}
          >
          </input> : <h2>{work.company}</h2>}
          {this.state.editing ?           
          <textarea
              className="login-input"
              id={work.job}
              type="text" 
              placeholder={work.job}
              value={this.state.job}
              onChange={e => this.handleInputChange(e)}
          >
          </textarea>  : <p id="jobs">{work.job}</p>}
          {props.isLoggedIn ? <button className='editbtn' id='editbtn' onClick={ e => this.handleClick(e) }>edit</button> : null}
        </div>
      ) 
    })
  }

  render() {
    return (
      <div className={"section"}>
        <div className="section-content" id={this.props.id}>
          {this.props.isLoggedIn ? <button id='newbtn' onClick={ e => this.handleClick(e) }>new</button> : null}
          <h1>{this.props.title}</h1>
          {this.props.loading}
          {this.state.creating ? console.log('creating!') : null }
          {this.state.editing ? console.log('editing!') : null }
          <div id="work-content">
            {this.renderWork(this.props)}
          </div>
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