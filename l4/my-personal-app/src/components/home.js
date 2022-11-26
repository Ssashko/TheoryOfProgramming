import React from "react";

import "../styles/home.css";

export default class Home extends React.Component {
    render() {
        return (
            <main>
                <div className="main-banner">
                <img src={require('../images/lorem-main.png')} alt="lorem" />
                <h1 className="main-header">Absolute arbitrary information</h1>
                <div className="main-col">
                    <div className="main-col-el">
                    <div className="image-wrapper">
                        <img src={require("../images/col1.png")} alt="" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit impedit consectetur, in exercitationem rerum sed? Consequatur quidem blanditiis officiis, nulla accusamus veritatis. Harum in aut, error asperiores praesentium quidem!
                    Ex corporis repudiandae voluptatibus, a suscipit id incidunt vel ratione amet minima soluta atque rem magni labore nobis quidem eos dolor explicabo officia nihil. Minus tempore obcaecati nisi ipsa dicta.
                    Tempora voluptatem in fuga nobis veniam autem quisquam assumenda ad, atque, quae aliquam, odit labore quibusdam est modi placeat optio obcaecati nihil doloribus quaerat repellendus itaque. Quas officia doloribus natus.
                    Ut reprehenderit voluptates eligendi, inventore porro amet sequi magni magnam iusto veniam natus velit enim commodi debitis, voluptatum quasi soluta, dolore nesciunt. Laudantium, quae doloribus culpa minima a cum fugit!
                    Pariatur voluptates, nisi eaque reiciendis dolorem laboriosam ut natus. Quae vitae obcaecati quis odit atque natus molestias accusamus explicabo quasi totam, tempora dicta illum nobis eveniet eaque ducimus facilis commodi.</p>
                    </div> 
                    <div className="main-col-el">
                    <div className="image-wrapper">
                        <img src={require("../images/col2.png")} alt="" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit impedit consectetur, in exercitationem rerum sed? Consequatur quidem blanditiis officiis, nulla accusamus veritatis. Harum in aut, error asperiores praesentium quidem!
                        Ex corporis repudiandae voluptatibus, a suscipit id incidunt vel ratione amet minima soluta atque rem magni labore nobis quidem eos dolor explicabo officia nihil. Minus tempore obcaecati nisi ipsa dicta.
                        Tempora voluptatem in fuga nobis veniam autem quisquam assumenda ad, atque, quae aliquam, odit labore quibusdam est modi placeat optio obcaecati nihil doloribus quaerat repellendus itaque. Quas officia doloribus natus.
                        Ut reprehenderit voluptates eligendi, inventore porro amet sequi magni magnam iusto veniam natus velit enim commodi debitis, voluptatum quasi soluta, dolore nesciunt. Laudantium, quae doloribus culpa minima a cum fugit!
                        Pariatur voluptates, nisi eaque reiciendis dolorem laboriosam ut natus. Quae vitae obcaecati quis odit atque natus molestias accusamus explicabo quasi totam, tempora dicta illum nobis eveniet eaque ducimus facilis commodi.</p>
                    </div> 
                    <div className="main-col-el">
                    <div className="image-wrapper">
                        <img src={require("../images/col3.jpg")} alt="" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit impedit consectetur, in exercitationem rerum sed? Consequatur quidem blanditiis officiis, nulla accusamus veritatis. Harum in aut, error asperiores praesentium quidem!
                        Ex corporis repudiandae voluptatibus, a suscipit id incidunt vel ratione amet minima soluta atque rem magni labore nobis quidem eos dolor explicabo officia nihil. Minus tempore obcaecati nisi ipsa dicta.
                        Tempora voluptatem in fuga nobis veniam autem quisquam assumenda ad, atque, quae aliquam, odit labore quibusdam est modi placeat optio obcaecati nihil doloribus quaerat repellendus itaque. Quas officia doloribus natus.
                        Ut reprehenderit voluptates eligendi, inventore porro amet sequi magni magnam iusto veniam natus velit enim commodi debitis, voluptatum quasi soluta, dolore nesciunt. Laudantium, quae doloribus culpa minima a cum fugit!
                        Pariatur voluptates, nisi eaque reiciendis dolorem laboriosam ut natus. Quae vitae obcaecati quis odit atque natus molestias accusamus explicabo quasi totam, tempora dicta illum nobis eveniet eaque ducimus facilis commodi.</p>
                    </div> 
                </div>
                </div>
            </main>
        )
    }
}