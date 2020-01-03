import React from 'react'
import {Redirect} from 'react-router-dom'
import IngredientsContainer from '../containers/IngredientsContainer.js'
const Meal = (props) => {
    

    const meal = props.meals[props.match.params.id -1]
    
    return (
        <div>
            <h2>
                {meal ? null: <Redirect to='/meals' />}
                {meal ? meal.name: null} - {meal ? meal.kcal: null}
            </h2>
            <IngredientsContainer meal={meal}/>
        </div>
    )

}
export default Meal;