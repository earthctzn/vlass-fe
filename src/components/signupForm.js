import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ErrorComponent } from './ErrorComponent';
import { Redirect } from 'react-router-dom'
import { setErrors, setUser, clearErrors} from '../actions/userActions'



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
        console.log(this.props.token)
        this.signupUser(this.props.token, this.state)
        this.setState({
            username: '',
            password: '',
            password_confirmation: ''
        })
        this.props.clearErrors()
    }
    
    signupUser =  async (token, user) => {
   
        const headers = new Headers();
        headers.append('Content-Type', 'application/json')
        headers.append('Accepts', 'application/json')
        headers.append('X-CSRF-Token', token)
    
        const formData = {user: {
            username: user.username,
            password: user.password,
            password_confirmation: user.password_confirmation 
        }};
    
        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(formData),
            credentials: 'include'
        };
    
        try{
            const response = await fetch('http://localhost:3000/api/v1/signup', options)
            const dataObj = await response.json();
            if (dataObj.errors){
                this.props.setErrors(dataObj)
            }else{
                this.props.setUser(dataObj)
            }
        } catch(data) {
            console.log(data)
        };
        
    };

    render() {
        return this.state.shouldRedirect ? 
         (<Redirect to="/home" /> ) 
         : 
         (
            <>
                <div className="lgin-card" >
                    <h3>Signup below:</h3>
                    <form onSubmit={this.handleOnSubmit}>
                        <input
                            id='username'
                            type="text" 
                            placeholder="username"
                            value={this.state.username}
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
                        <input
                            id="password_confirmation"
                            type="password" 
                            placeholder="password confirmation"
                            value={this.state.password_confirmation}
                            onChange={e => this.handleInputChange(e)}
                        >
                        </input>
                        <button type="submit"> Sign Up </button>
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
        errors: state.user.formErrors,
        user: state.user.admin,
        token: state.token
    }
} 


export default connect(mapStateToProps, { setUser, setErrors, clearErrors })(SignupInput)