import React from 'react'

const Meal = (props) => {
    console.log("Meal props:", props)

    const meal = props.meals[props.match.params.id -1]
    return (
        <div>
            {meal ? meal.name: null} - {meal ? meal.description: null}
        </div>
    )

}
export default Meal;