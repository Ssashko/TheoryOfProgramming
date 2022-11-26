import React from "react";
import "../styles/login.css";

export default class Login extends React.Component {
        state = {
            login: "",
            password: "",
        }
        changeInput = (e) => {
            this.setState({[e.target.name] : e.target.value});
        }
        handleSubmit = (e) => {
            e.preventDefault()
            this.props.checker(this.state.login,this.state.password);
            this.setState({
                login: "",
                password: "",
            })
    
        }
    render() {
        return (
            <main>
                <div className="login-window">
                <p>Вхід</p>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.changeInput} name="login" type="text" value={this.state.login}  placeholder="логін" />
                    <input onChange={this.changeInput} name="password" type="password" value={this.state.password} placeholder="пароль" />
                    <input type="submit" />
                </form>
                </div>
            </main>
            );
        
    }
}