import React from "react";
import { v4 as uuidv4} from "uuid";
import "../styles/news.css";

import NewsService from "../services/news";
import NewsItem from "./news-item";

export default class News extends React.Component {
    constructor() {
        super();
        this.newsService = new NewsService("/assets/news.json");
        
        this.newsService.getNews().then(response => setTimeout(() => {this.setState({
            info: response, loaded : true
        })},500));
    }
    state = {
        info: [],
        loaded: false
    }
    render() {
        
        return (
            <div className="news-wrapper">

                <div className={"newsLoader " + (this.state.loaded ? "hide" : "")}>
                    <img src={require("../images/loading.gif")}></img>
                </div>
                {
                this.state.info.map(news => {
                    return (<NewsItem key={uuidv4()}
                        image_src = {news.image}
                        title = {news.title}
                        text = {news.text}
                        />)
                })
                }
            </div>
        )
    }
}