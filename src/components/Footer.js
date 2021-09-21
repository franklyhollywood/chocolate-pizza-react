import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
            <div>
            <section id="about-me-section">
            
            <div id="about-me-pic">
                <img src="van-pic.png" alt="person" />
            </div>
            <div id="about-me-text">
                <h3 class="author">
                    Vanessa Stevenson
                </h3>
                <p>
                    Food enthusiast, photography fan.  Add a pinch of raw foodism and that's <br />
                    pretty much who I am.
                </p>
            </div>
            <div id="about-me-button">
                <button>SHARE RECIPE</button>
            </div>
        </section>
    
    <hr />
    <footer id="footer-section">
        Delicious © 2013 &#8226; All Rights Reserved.
                Proudly published with Ghost.
    </footer> 
            </div>
            </>
        )
    }
}
