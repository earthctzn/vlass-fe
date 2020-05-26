import React, { Component } from 'react';
import { connect } from 'react-redux'

import { ErrorComponent } from './ErrorComponent'
import { Redirect } from 'react-router-dom'
import { clearErrors } from '../actions/userActions'


class LoginInput extends Component {
    constructor(props) {
        super(props)
            this.state = {
            email: '',
            password: '',
            shouldRedirect: false
        }
    }

    componentDidUpdate(prevProps) {
        
        if(this.props.user && !prevProps.user) {
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

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.handleSubmit(this.props.token, this.state)
        this.setState({
            email: '',
            password: ''
        })
        this.props.clearErrors()
             
    }

    render() {
        return this.state.shouldRedirect ? 
         (<Redirect to="/home" /> ) 
         : 
         (
            <>
                <div className="login-card" >
                    <h3>Login To See all breweries!</h3>
                    <form onSubmit={this.handleOnSubmit}>
                        <input
                            id='email'
                            type="text" 
                            placeholder="email"
                            value={this.state.email}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </input>
                        <input
                            id="password"
                            type="password" 
                            placeholder="password"
                            value={this.state.password}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </input>
                        <button type="submit" > Log In </button>
                    </form>
                </div>
                <div>
                    {this.renderErrors()}  
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.token,
        user: state.user.admin,
        errors: state.user.formErrors
    }
}
export default connect(mapStateToProps, {clearErrors})(LoginInput)


