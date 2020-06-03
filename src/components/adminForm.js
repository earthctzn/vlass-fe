import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { ErrorComponent } from './ErrorComponent'
import { Redirect } from 'react-router-dom'
import { updateAbout } from '../actions/aboutActions'



class AdminForm extends Component {
    constructor(props) {
        super(props)
            this.state = {
                wftitle: '',
                wfcontent: '',
                abtitle: '',
                abcontent: '',
                homecontent: '',
                contitle: '',
                concontent: '',
                shouldRedirect: false
            } 
    }

    
    handleInputChange = event => {
        console.log( event.target.name, event.target.id, event.target.value, this.state)
        this.setState({
           [event.target.id]: event.target.value 
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.updateAbout( this.props.token, this.state.abtitle, this.state.abcontent, this.props.about.id  )  
        this.setState({
            wftitle: '',
            wfcontent: '',
            abtitle: '',
            abcontent: '',
            homecontent: '',
            contitle: '',
            concontent: '',
            shouldRedirect: true
        })
    }

    render() {
        return this.state.shouldRedirect ? 
        (<Redirect to="/boss" /> ) 
        : 
        (
            <div className="signup">
                <div className="login-card" >
                    <h3>{this.props.home.title}</h3>
                    <form >
                        <input
                            className="login-input"
                            id="homecontent"
                            type="text" 
                            placeholder={this.props.home.content}
                            value={this.state.homecontent}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </input>
                        <button id="login-button" 
                            // onClick={ this.props.updateHome(this.props.token, this.state.home)} 
                        > 
                            submit 
                        </button>
                    </form>

                    <h3>{this.props.about.title}</h3>
                    <form >
                        <input
                            className="login-input"
                            id='abtitle'
                            type="text" 
                            placeholder={this.props.about.title}
                            value={this.state.abtitle}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </input>
                        <input
                            className="login-input"
                            id="abcontent"
                            type="text" 
                            placeholder={this.props.about.content}
                            value={this.state.abcontent}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </input>
                        <button id="login-button" 
                            onClick={e => this.handleOnSubmit(e)} > 
                            submit 
                        </button>
                    </form>
                
                    <h3>{this.props.contact.title}</h3>
                    <form >
                        <input
                            className="login-input"
                            id='contitle'
                            type="text" 
                            placeholder={this.props.contact.title}
                            value={this.state.contitle}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </input>
                        <input
                            className="login-input"
                            id="concontent"
                            type="text" 
                            placeholder={this.props.contact.content}
                            value={this.state.concontent}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </input>
                        <button id="login-button" 
                            // onClick={ this.props.updateContact(this.props.token, this.state.contact)} 
                        > 
                            submit 
                        </button>
                    </form>

                    <h3>{this.props.workflow.title}</h3>
                    <form >
                        <input
                            className="login-input"
                            id='wftitle'
                            type="text" 
                            placeholder={this.props.workflow.title}
                            value={this.state.wftitle}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </input>
                        <input
                            className="login-input"
                            id="wfcontent"
                            type="text" 
                            placeholder={this.props.workflow.content}
                            value={this.state.wfcontent}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </input>
                        <button id="login-button" 
                            // onClick={ this.props.updateWorkflow(this.props.token, this.state.workflow)} 
                        > 
                            submit 
                        </button>
                    </form>
                </div>
         
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.token,
        about: state.about,
        home: state.home,
        work: state.work,
        workflow: state.workflow,
        contact: state.contact
    }
}
export default connect(mapStateToProps, {
    updateAbout
    // updateHome, 
    // updateWork, 
    // updateWorkflow, 
    // updateContact
})(AdminForm)