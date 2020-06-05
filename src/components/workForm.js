import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createWork, updateWork } from '../actions/workActions'

class WorkForm extends Component {

    constructor(props){
        super(props)
        this.state={
            companyname: '',
            jobdescription: ''
        }
    }

    handleInputChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    updateClick = (e) => {
        e.preventDefault()
        this.props.updateWork(this.props.token, this.state.companyname, this.state.jobdescription, this.props.work.id)
    }

    createClick = (e) => {
        e.preventDefault()
        this.props.createWork(this.props.token, this.state.companyname, this.state.jobdescription)
      
    }


    render() {
        return (
            <div>
                {this.props.editing ? 
                    <form>
                        <input
                            className="login-input"
                            id='companyname'
                            type="text" 
                            placeholder={this.props.work.companyname || "company name"}
                            value={this.state.companyname}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </input>          
                        <textarea
                            className="login-input"
                            id='jobdescription'
                            type="text" 
                            placeholder={this.props.work.jobdescription || "enter job description"}
                            value={this.state.jobdescription}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </textarea>
                    </form>
                    :
                    <form>
                    <input
                        className="login-input"
                        id='companyname'
                        type="text" 
                        placeholder="company name"
                        value={this.state.companyname}
                        onChange={e => this.handleInputChange(e)}
                    >
                    </input>          
                    <textarea
                        className="login-input"
                        id='jobdescription'
                        type="text" 
                        placeholder= "enter job description"
                        value={this.state.jobdescription}
                        onChange={e => this.handleInputChange(e)}
                    >
                    </textarea>
                </form>
                }
               {this.props.editing ? 
                <button  
                    onClick={e => this.updateClick(e)}
                > submit 
                </button> 
                : 
                <button  
                    onClick={e => this.createClick(e)}
                > submit 
                </button> 
                } 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.token

    }
}

export default connect(mapStateToProps, {createWork, updateWork})(WorkForm)
