import React,  { Component } from "react";
import { connect } from "react-redux"

import WorkForm from './workForm'
import { selectedWork } from '../actions/workActions'

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
    this.setState({
        [event.target.id]: event.target.value
    })
  }

  handleClick = (e) => {

    if (e.target.id === 'editbtn') {
      console.log(this.props)
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
 

  renderForm = () => {
    if (this.state.creating ) {
      return (
        <WorkForm editing={this.state.editing} />
      )
    }
    if (this.state.editing && this.props.history.workArr.length > 0) {
      return this.props.history.workArr.map( work => {
        return (
          <WorkForm id={work.companyname} key={work.companyname} work={work} editing={this.state.editing} />
        )
      })
    }
  }

  renderWork = () => {
    if (this.props.history.workArr.length > 0 ){
      return this.props.history.workArr.map( work => {
        return (
          <div key={work.id}>
            <h2>{work.companyname}</h2>
              <p id="jobs">{work.jobdescription}</p>
              {this.props.isLoggedIn ? <button className='editbtn' id='editbtn' onClick={ e => this.handleClick( e ) }>edit</button> : null}
          </div>
        ) 
      })
    }

  }

  render() {
    return(
      <div className={"section"}>
        <div className="section-content" id={this.props.id}>
          {this.props.isLoggedIn ? <button id='newbtn' onClick={ e => this.handleClick(e) }>new</button> : null}
          <h1>{this.props.title}</h1>
          {this.props.loading}
          {this.state.creating ? this.renderForm()  : null }
          {this.state.editing && this.props.history.workArr.length > 0 ? this.renderForm() : null }
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
    history: state.work,
    token: state.token
  }
}



export default connect(mapStateToProps, {selectedWork})(Work)