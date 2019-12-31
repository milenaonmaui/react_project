import React from 'react'
import Meal from './Meal.js'

const MealList = (props) => {
    
    return (
        <div>
            {props.meals.map((meal, id) => <div key={meal.id}><Meal  meal={meal}/></div>)}
        </div>
    )

}
export default MealList;