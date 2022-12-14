import React, { Component } from "react"

class InputTodo extends Component {
    state = {
        title: ""
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.addTodoProps(this.state.title)
        this.setState({
            title: ""
        })

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input type="text" 
                className="input-text"
                value={this.state.title} 
                onChange = {this.onChange}
                name="title"
                placeholder="Add Todo..."/>
                <input type="submit" className="input-submit" value="Submit"/>
            </form>

        )
    }
}

export default InputTodo