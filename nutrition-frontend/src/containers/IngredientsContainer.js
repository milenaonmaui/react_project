import React from 'react'
import IngredientsList from '../components/IngredientsList.js'
import IngredientInput from '../components/IngredientInput.js'
import IngredientSearch from '../components/IngredientSearch.js'

class IngredientsContainer extends React.Component {

    render(){
        console.log("Ingredients container props:", this.props)
        let meal = this.props.meal
        if (meal === undefined) {
            meal = {
                id: null,
                ingredients: []
            }
        }
       
        return (
            <div>
                <p><b> Ingredients</b></p>
                <IngredientsList ingredients={meal.ingredients} meal_id = {meal.id} action={"Delete"}/>
                <IngredientSearch meal_id = {meal.id}/>
                <IngredientInput meal={meal}/>                
            </div>
        )
    }

}

export default IngredientsContainer