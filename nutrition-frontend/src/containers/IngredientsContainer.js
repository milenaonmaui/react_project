import React from 'react'
import IngredientsList from '../components/IngredientsList.js'
import IngredientInput from '../components/IngredientInput.js'

class IngredientsContainer extends React.Component {

    render(){
        console.log("Ingredients container props:", this.props)
        let ingredients = this.props.meal ? this.props.meal.ingredients: []

        return (
            <div>
                <IngredientsList ingredients={ingredients}/>
                <IngredientInput meal={this.props.meal}/>
            </div>
        )
    }

}

export default IngredientsContainer