import React from "react";

import "../styles/footer.css";

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer">
                    <p className="rights">all rights reserved ® {this.props.year}</p>
                    <div className="info">
                        <p>aboba arbitrary site</p>
                        <div>
                            <h6>Contact</h6>
                            <p>28 universytetska, Chernivtsi, Ukraine
                            <br/>marianchuk.oleksandr@chnu.edu.ua
                            <br/>+380000000000</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}