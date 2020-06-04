import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { ErrorComponent } from './ErrorComponent'
import { Redirect } from 'react-router-dom'
import { updateAbout } from '../actions/aboutActions'
import { updateHome } from '../actions/homeActions'
import { updateContact } from '../actions/contactActions'
import { updateWorkflow } from '../actions/workflowActions'




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

    componentDidMount() {
        if(this.props.isLoggedIn === false) {
            this.setState({
                shouldRedirect: true
            })
        }
    }

    
    handleInputChange = event => {
        this.setState({
           [event.target.id]: event.target.value 
        })
    }

    handleClick = (event) => {
        event.preventDefault()
        switch (event.target.id){
            case 'home-button':
                console.log(event.target.id, "was pressed")
                this.props.updateHome(this.props.token, this.state.homecontent, this.props.home.id )
                this.setState({
                    ...this.state,
                    homecontent: ''
                })
                break
            case 'abt-button':
                console.log(event.target.id, "was pressed")
                this.props.updateAbout( this.props.token, this.state.abtitle, this.state.abcontent, this.props.about.id  )
                this.setState({
                    ...this.state,
                    abtitle: '',
                    abcontent: ''
                })
                break
            case 'wf-button':
                console.log(event.target.id, "was pressed")
                this.props.updateWorkflow(this.props.token, this.state.wftitle, this.state.wfcontent, this.props.workflow.id )
                this.setState({
                    ...this.state,
                    wftitle: '',
                    wfcontent: ''
                })
                break 
            case 'contact-button':
                console.log(event.target.id, "was pressed")
                this.props.updateContact(this.props.token, this.state.contitle, this.state.concontent, this.props.contact.id )
                this.setState({
                    ...this.state,
                    contitle: '',
                    concontent: ''
                })
                break          
        default:
            return 
        
        }
          

    }

    render() {
        console.log("admin form should redirect?", this.props.isLoggedIn)
        return (!this.props.isLoggedIn ?
            ( <Redirect to="/boss" /> )
            :
            (
            <div className="signup">
                <div id="admin-card" >

                    <h3>HOME</h3>
                    <form >
                        <input
                            className="admin-input"
                            id="homecontent"
                            type="text" 
                            placeholder={this.props.home.content}
                            value={this.state.homecontent}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </input>
                        <button id="home-button" 
                            onClick={ e => this.handleClick(e)} 
                        > 
                             Submit
                        </button>
                    </form>

                    <h3>WHAT WE DO</h3>
                    <form >
                        <input
                            className="admin-input"
                            id='abtitle'
                            type="text" 
                            placeholder={this.props.about.title}
                            value={this.state.abtitle}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </input>
                        <input
                            className="admin-input"
                            id="abcontent"
                            type="text" 
                            placeholder={this.props.about.content}
                            value={this.state.abcontent}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </input>
                        <button id="abt-button" 
                            onClick={e => this.handleClick(e)} > 
                            submit 
                        </button>
                    </form>
                
                    <h3>WORKFLOW</h3>
                    <form >
                        <input
                            className="admin-input"
                            id='wftitle'
                            type="text" 
                            placeholder={this.props.workflow.title}
                            value={this.state.wftitle}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </input>
                        <input
                            className="admin-input"
                            id="wfcontent"
                            type="text" 
                            placeholder={this.props.workflow.content}
                            value={this.state.wfcontent}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </input>
                        <button id="wf-button" 
                            onClick={ e => this.handleClick(e)} 
                        > 
                            submit 
                        </button>
                    </form>

                    <h3>CONTACT</h3>
                    <form >
                        <input
                            className="admin-input"
                            id='contitle'
                            type="text" 
                            placeholder={this.props.contact.title}
                            value={this.state.contitle}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </input>
                        <input
                            className="admin-input"
                            id="concontent"
                            type="text" 
                            placeholder={this.props.contact.content}
                            value={this.state.concontent}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </input>
                        <button id="contact-button" 
                            onClick={ e => this.handleClick(e)} 
                        > 
                            submit 
                        </button>
                    </form>
                </div>
         
            </div>
            )
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
        contact: state.contact,
        isLoggedIn: state.user.loggedIn
    }
}
export default connect(mapStateToProps, {
    updateAbout,
    updateHome, 
    // updateWork, 
    updateWorkflow, 
    updateContact
})(AdminForm)