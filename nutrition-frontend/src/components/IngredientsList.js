import React from 'react'
import {connect} from 'react-redux'
import {deleteIngredient} from '../actions/deleteIngredient.js'
import Ingredient from './Ingredient.js'

const IngredientsList = (props) => {

    const handleDelete = (ingredient) =>{
        console.log("handleDelete", props.meal_id)
        props.deleteIngredient(ingredient.id, props.meal_id)
    }

    console.log("Ingredients list props: ", props)
    return (
        <div>
            {props.ingredients.map(ingredient => <li key={ingredient.id} ><Ingredient ingredient={ingredient}/> 
            
            {props.meal_id?
               <button className='btn btn-primary' onClick = {() => handleDelete(ingredient)}>Delete</button> : ""}
            <div id={"ingr-" + ingredient.id}></div> </li>)}
        </div>
    )

}
export default connect(null, {deleteIngredient})(IngredientsList);