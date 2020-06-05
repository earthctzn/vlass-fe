import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ErrorComponent } from './ErrorComponent';
import { Redirect } from 'react-router-dom'
import { clearErrors, signupUser} from '../actions/userActions'

class SignupInput extends Component {

    constructor(props) {
        super(props)
            this.state = {
            username: '',
            password: '',
            password_confirmation: '',
            shouldRedirect: false
        }
    }

    renderErrors = () => {
       return this.props.errors.map(error => <ErrorComponent key={error} error={error} />)
    } 

    handleInputChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.signupUser(this.props.token, this.state)
        this.setState({
            username: '',
            password: '',
            password_confirmation: ''
        })
        this.props.clearErrors()
    }

    render() {
        console.log(this.state.shouldRedirect, this.props.isLoggedIn)
        return this.props.isLoggedIn? 
         (<Redirect to="/building" /> ) 
         : 
         (
            <div className="signup">
                <div className="signup-card" >
                    <h3>Signup below:</h3>
                    <form onSubmit={this.handleOnSubmit}>
                        <input
                            className='signup-input'
                            id='username'
                            type="text" 
                            placeholder="username"
                            value={this.state.username}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </input>
                        <input
                            className='signup-input'
                            id='password'
                            type="password" 
                            placeholder="password"
                            value={this.state.password}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </input>
                        <input
                            className='signup-input'
                            id='password_confirmation'
                            type="password" 
                            placeholder="password confirmation"
                            value={this.state.password_confirmation}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </input>
                        <button id="signup-button" type="submit"> 
                            Submit 
                        </button>
                    </form>
                    <div>
                        {this.renderErrors()}  
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        errors: state.user.formErrors,
        isLoggedIn: state.user.loggedIn,
        token: state.token
    }
} 

export default connect(mapStateToProps, { signupUser, clearErrors })(SignupInput)