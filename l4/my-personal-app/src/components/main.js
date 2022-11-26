import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Footer from "./footer";

import Header from "./header";
import Home from "./home"
import Login from "./login";
import News from "./news";
import Profile from "./profile";

import "../styles/main.css";
export default class Main extends React.Component {
    constructor(){
        super()
        if(localStorage.getItem('auth') == '1')
        {
            this.state.auth = true;
            this.state.login = localStorage.getItem('login');
            this.state.pass = localStorage.getItem('pass');
        }
        
    }
    state = {
        auth: false,
        login: "",
        pass: ""
    }
    checkNewLogin =  (login, pass) => {
        const TrueLogin = "admin";
        const TruePass = "12345";
        if(login === TrueLogin && pass === TruePass)
        {
            this.setState({
                auth: true,
                login: login,
                pass: pass
            })

            localStorage.setItem('auth', '1');
            localStorage.setItem('login', login);
            localStorage.setItem('pass', pass);
            alert("OK");
        }
        else
            alert("incorrect creditians");
    }
    render() {

        return (
            <Router>
                <div className="wrapper">
                    <Header headerParam={
                        {
                            links : [
                                {
                                    name: "news",
                                    src: "/news"
                                },
                                {
                                    name: "profile",
                                    src: "/profile"
                                }
                            ]
                        }
                    }/>
                    <div className="content">
                        <Routes>
                            <Route exact path="/" element={<Home/>} />
                            <Route exact path="/news" element={<News/>} />
                            <Route exact path="/profile" element={
                                this.state.auth ? <Profile login={this.state.login} /> : <Login checker={this.checkNewLogin}/>
                            } />
                            <Route path="*" element={<Home/>} />
                        </Routes>
                    </div>
                    <Footer year={new Date().getFullYear()}/>
                </div>
            </Router>
        )
    }
}