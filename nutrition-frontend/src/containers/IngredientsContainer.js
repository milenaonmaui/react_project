import React from 'react'
import IngredientsList from '../components/IngredientsList.js'
import IngredientInput from '../components/IngredientInput.js'

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
        //let ingredients = this.props.meal ? this.props.meal.ingredients: []
        //let meal = this.props.meal ? this.props.meal : {id: null}
        return (
            <div>
                <IngredientsList ingredients={meal.ingredients} meal_id = {meal.id}/>
                <IngredientInput meal={meal}/>
            </div>
        )
    }

}

export default IngredientsContainer