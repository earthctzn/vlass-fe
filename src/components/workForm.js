import React, { Component } from 'react'
import { connect } from 'react-redux'


class WorkForm extends Component {

    constructor(props){
        super(props)
        this.state={
            company: '',
            job: ''
        }
    }

    handleInputChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }


    render() {
        return (
            <div>
                <form>
                    <input
                        className="login-input"
                        id={this.props.work.id}
                        type="text" 
                        placeholder={this.props.work.company}
                        value={this.state.company}
                        onChange={e => this.handleInputChange(e)}
                    >
                    </input>          
                    <textarea
                        className="login-input"
                        id={this.props.work.company}
                        type="text" 
                        placeholder={this.props.work.job}
                        value={this.state.job}
                        onChange={e => this.handleInputChange(e)}
                    >
                    </textarea>
                </form>
                <button  
                    id={this.props.work.id} 
                    onClick={e => this.props.handleClick(e)}
                > submit </button>
            </div>
        )
    }
}

export default connect(mapStateToProps,{})(WorkForm)
