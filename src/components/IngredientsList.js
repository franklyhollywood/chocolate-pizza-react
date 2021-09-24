import React, { Component } from 'react'
import IngredientItem from './IngredientItem.js'
export default class IngredientsList extends Component {
    render() {
        return (
            <ul>
                <IngredientItem amount = "1/2 cup" name = " Milk" />
                <IngredientItem amount = "1/2 cup" name = " Marvscapone" />
                <IngredientItem amount = "1/2 tsp" name = " Pink Salt" />
                <IngredientItem amount = "1 lb" name = " Black Mission Figs" />
                <IngredientItem amount = "1/2 cup" name = " Brown Shuga" />
                <IngredientItem amount = "2-4 tbsp" name = " Water" />
                <IngredientItem amount = "1/2 cup" name = " Heavy Cream" />
                <IngredientItem amount = "1/3 cup" name = " Granulated Shuga" />
                <IngredientItem amount = "2" name = " Egg Yolks" />
                <IngredientItem amount = "1 lemon" name = " Juiced" />
                <IngredientItem amount = "2 tbsp" name = " Butter" />
                <IngredientItem amount = "1 cup" name = " Honey Roasted Pecans, Roughly Chopped" />
        </ul>
        )
    }
}
