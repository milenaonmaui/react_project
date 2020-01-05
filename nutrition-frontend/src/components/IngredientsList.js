import React from 'react'
import {connect} from 'react-redux'
import {deleteIngredient} from '../actions/deleteIngredient.js'

const IngredientsList = (props) => {

    const handleDelete = (ingredient) =>{
        console.log("handleDelete", props.meal_id)
        props.deleteIngredient(ingredient.id, props.meal_id)
    }

    console.log("Ingredients list props: ", props)
    return (
        <div>
            {props.ingredients.map(ingredient => <li key={ingredient.id}>{ingredient.name} - {ingredient.measure} <button onClick = {() => handleDelete(ingredient)}>Delete</button></li>)}
        </div>
    )

}
export default connect(null, {deleteIngredient})(IngredientsList);