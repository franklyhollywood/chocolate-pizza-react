import React, { Component } from 'react'

export default class IngredientItem extends Component {
    render() {
        return (
            <div>
                <input type = "checkbox" />
                {this.props.amount}
                {this.props.name}
            </div>
        )
    }
}
