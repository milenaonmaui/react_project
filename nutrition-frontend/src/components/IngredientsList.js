import React from 'react'

const IngredientsList = (props) => {
    console.log("Ingredients list props: ", props)
    return (
        <div>
            {props.ingredients.map(ingredient => <li key={ingredient.id}>{ingredient.name} - {ingredient.measure}</li>)}
        </div>
    )

}
export default IngredientsList;