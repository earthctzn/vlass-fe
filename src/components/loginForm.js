import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ErrorComponent } from './ErrorComponent'
import { Redirect } from 'react-router-dom'
import { clearErrors } from '../actions/userActions'
import { loginUser } from '../actions/loginActions'


class LoginInput extends Component {
    constructor(props) {
        super(props)
            this.state = {
            username: '',
            password: ''
        }
    }

    componentDidUpdate() {
        
        if(this.props.isLoggedIn === true) {
           this.setState({
               shouldRedirect: true
           })
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

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.loginUser(this.props.token, this.state)
        this.setState({
            username: '',
            password: ''
        })
        this.props.clearErrors()
             
    }

    render() {
        return this.state.shouldRedirect ? 
         (<Redirect to="/building" /> ) 
         : 
         (
            <div className="signup">
                <div className="login-card" >
                    <h3>Login to edit site.</h3>
                    <form onSubmit={this.handleOnSubmit}>
                        <input
                            className="login-input"
                            id='username'
                            type="text" 
                            placeholder="username"
                            value={this.state.username}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </input>
                        <input
                            className="login-input"
                            id="password"
                            type="password" 
                            placeholder="password"
                            value={this.state.password}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </input>
                        <button id="login-button" type="submit" > Log In </button>
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
        token: state.token,
        isLoggedIn: state.user.loggedIn,
        errors: state.user.formErrors
    }
}
export default connect(mapStateToProps, {loginUser, clearErrors})(LoginInput)


