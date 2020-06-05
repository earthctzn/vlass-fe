import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createWork, updateWork } from '../actions/workActions'

class WorkForm extends Component {

    constructor(props){
        super(props)
        this.state={
            editing: '',
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
        this.setState({
            ...this.state,
            companyname: '',
            jobdescription: ''

        })
    }

    createClick = (e) => {
        e.preventDefault()
        this.props.createWork(this.props.token, this.state.companyname, this.state.jobdescription)
        this.setState({
            ...this.state,
            companyname: '',
            jobdescription: ''
        })
    }
    renderForm = () => {
        return this.props.loggedIn ?
        <>
            {this.props.editing ? 
                <div id="forms">
                    <form>
                        <input
                            className="admin-input"
                            id='companyname'
                            type="text" 
                            placeholder={this.props.work.companyname}
                            value={this.state.companyname}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </input>          
                        <textarea
                            className="admin-input"
                            id='jobdescription'
                            type="text" 
                            placeholder={this.props.work.jobdescription}
                            value={this.state.jobdescription}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </textarea>
                    </form>
                    <button className='update-btn' 
                        onClick={e => this.updateClick(e)}> 
                        submit 
                    </button> 
                </div>
                :
                <div id="forms">
                    <form>
                        <input
                            className="admin-input"
                            id='companyname'
                            type="text" 
                            placeholder="company name"
                            value={this.state.companyname}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </input>          
                        <textarea
                            className="admin-input"
                            id='jobdescription'
                            type="text" 
                            placeholder= "enter job description"
                            value={this.state.jobdescription}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </textarea>
                    </form>
                    <button className="create-btn" 
                        onClick={e => this.createClick(e)}> 
                        submit 
                    </button> 
                </div>
            }
        </>
        :
        null
    }


    render() {
        return (
           this.renderForm()
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.token,
        loggedIn: state.user.loggedIn

    }
}

export default connect(mapStateToProps, {createWork, updateWork})(WorkForm)
