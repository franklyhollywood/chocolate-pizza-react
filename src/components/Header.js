import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <>
            <header id="nav-bar">
            <div id="left-side-nav"> 
                <img class="logo" src="logo.png" alt = "logo"/>
                <div>
                    <h1>{this.props.heading}</h1>
                    <h6>the Best Food Blog on The Web</h6>
                </div>
            </div>
            <div id="right-side-nav">
            <img class="icon" src="fb-icon.png" alt = "fbicon"/>
           <img class="icon" src="twit-icon.png" alt = "twittter icon"/>
           <img class="icon" src="gp-icon.png" alt = "gp icon"/>
           <img class="icon" src="insta-icon.png" alt = "instagram icon"/>
           <img class="icon" src="flic-icon.png" alt = "flic icon"/>
           <img class="icon" src="pint-icon.png" alt = "pint icon"/>
           <img class="icon" src="rss-icon.png" alt = "rss icon"/>
           <img class="icon" src="mail-icon.png" alt = "email icon"/>
            </div>
        </header>
        <hr class="hr" />
        </>
        )
    }
}
