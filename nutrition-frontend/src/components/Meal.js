import React from 'react'
import {Redirect} from 'react-router-dom'
const Meal = (props) => {
    

    const meal = props.meals[props.match.params.id -1]
    
    return (
        <div>
            {meal ? null: <Redirect to='/meals' />}
            {meal ? meal.name: null} - {meal ? meal.description: null}
        </div>
    )

}
export default Meal;