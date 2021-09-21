import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <>
            <header id="nav-bar">
            <div id="left-side-nav"> 
                <img class="logo" src="logo.png" />
                <div>
                    <h1>{this.props.heading}</h1>
                    <h6>the Best Food Blog on The Web</h6>
                </div>
            </div>
            <div id="right-side-nav">
            <img class="icon" src="fb-icon.png" />
           <img class="icon" src="twit-icon.png" />
           <img class="icon" src="gp-icon.png" />
           <img class="icon" src="insta-icon.png" />
           <img class="icon" src="flic-icon.png" />
           <img class="icon" src="pint-icon.png" />
           <img class="icon" src="rss-icon.png" />
           <img class="icon" src="mail-icon.png" />
            </div>
        </header>
        <hr class="hr" />
        </>
        )
    }
}
