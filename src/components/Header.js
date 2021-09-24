import React, { Component } from 'react'
import ButtonList from './ButtonList.js'

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
          <ButtonList />  
        </header>
        <hr class="hr" />
        </>
        )
    }
}
