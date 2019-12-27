import React from 'react'

const MealList = (props) => {
    
    return (
        <div>
            {props.meals.map((meal, id) => <li key={meal.id}>{meal.name} </li>)}
        </div>
    )

}
export default MealList;