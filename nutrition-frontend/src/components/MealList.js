import React from 'react'
import {Route, Link} from 'react-router-dom'
import Meal from './Meal.js'

const MealList = (props) => {
    
    return (
        <div>
            {props.meals.map((meal, id) => <p key={meal.id}><Link to = {`/meals/${meal.id}`}>{meal.name}</Link></p>)}
        </div>
    )

}
export default MealList;