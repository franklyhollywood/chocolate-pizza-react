import React, { Component } from 'react'
import ButtonList from './components/ButtonList'
import Footer from './components/Footer.js'
import Header from './components/Header'
import ImageSection from './components/ImageSection.js'
import IngredientsList from './components/IngredientsList.js'
import Recipe from './components/Recipe.js'

export default class App extends Component {
  render() {
    return (
      <>
     <Header heading = 'Delicious'/>
     <ButtonList />
     <ImageSection />
     <Recipe />
     <IngredientsList />
     <Footer />
     </>
    )
  }
}

