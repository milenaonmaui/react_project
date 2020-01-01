import React from 'react'
import IngredientsList from '../components/IngredientsList.js'
import IngredientInput from '../components/IngredientInput.js'

class IngredientsContainer extends React.Component {

    render(){
        console.log("Ingredients container props:", this.props)
        

        return (
            <div>
                <IngredientsList ingredients={this.props.meal && this.props.meal.ingredients}/>
                <IngredientInput />
            </div>
        )
    }

}

export default IngredientsContainer