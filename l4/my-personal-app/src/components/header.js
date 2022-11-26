import React from "react";
import { v4 as uuidv4} from "uuid";
import {
    Link
  } from "react-router-dom";

import Logo from '../images/logo.png';
import "../styles/header.css";

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header">
                <div className="logo-wrapper">
                    <img src={Logo} alt="logo" />
                </div>
                
                <p className="header-name"><Link to="/">Main</Link></p>
                <nav>
                    {
                        this.props.headerParam.links.map(link => {
                            return <Link key={uuidv4()} to={link.src}>{link.name}</Link>
                        })
                    }
                </nav>
                </div>
            </header>
        )
    }
}