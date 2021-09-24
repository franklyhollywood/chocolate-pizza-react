import React, { Component } from 'react'

export default class IngredientItem extends Component {
    render() {
        return (
            <ul>
               <li> <input type = "checkbox" /> </li>
                {this.props.amount}
                {this.props.name}
            </ul>
        )
    }
}
