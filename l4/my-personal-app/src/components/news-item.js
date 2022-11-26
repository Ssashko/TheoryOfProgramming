import React from "react";

import "../styles/news-item.css";

export default class NewsItem extends React.Component {
    render() {
        return (
            <div className="news-item">
                <div className="image-wrapper">
                    <img src={require("../images/news/" + this.props.image_src)} alt="item" />
                </div>
                <div className="info-wrapper">
                    <p className="news-item-title">{this.props.title}</p>
                    <p className="news-item-text">{this.props.text}</p>
                </div>
            </div>
        )
    }
}