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
        creating: false,
        editing: true
      })
    }
    if (e.target.id === 'newbtn') {
      this.setState({
        editing: false,
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
          <WorkForm 
            id={work.companyname} 
            key={work.companyname} 
            work={work} 
            editing={this.state.editing} 
          />
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
          </div>
        ) 
      })
    }
  }

  renderButtons = () => {
   return this.props.isLoggedIn ?   
      <div id="buttons-div">

        <button 
          className="newbtn" 
          id='newbtn' 
          onClick={ e => this.handleClick(e) }>
            new
        </button>

        <button 
          className='editbtn' 
          id='editbtn' 
          onClick={ e => this.handleClick( e ) }>
            edit
        </button>
        
      </div> 
      : 
      null
  }
  renderAdmin = () => {
    return this.props.isLoggedIn ?
    (
      <>
        {this.renderButtons()}

        {this.props.loading}
        {this.state.creating || this.state.editing ? 
          <div className="signup">
            <div id="admin-card" >
              {this.renderForm()}  
            </div>
          </div>
          : 
          null 
        }
      </>
    )
    :
    (
      null
    )
  }

  render() {
    return(
      <div className={"section"}>
          <div className="section-content" id={this.props.id}>
            <h1>{this.props.title}</h1>
            {this.renderAdmin()}
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
    token: state.token,
    isLoggedIn: state.user.loggedIn
  }
}



export default connect(mapStateToProps, {selectedWork})(Work)