import React from 'react'
import {connect} from 'react-redux'
import {deleteIngredient} from '../actions/deleteIngredient.js'
import {addIngredient} from '../actions/addIngredient'
import Ingredient from './Ingredient.js'

const IngredientsList = (props) => {

    const handleButtonClick = (ingredient, action) =>{
        if (action === "Add"){
            let servInput = "serv-" + ingredient.id
            let servings = document.getElementById(servInput).value
            const ingredient_data = {...ingredient, servings: servings}
            props.addIngredient(ingredient_data, props.meal_id)
            document.getElementById("ingr-" + ingredient.id).style.display = "none"        
        } else {
            props.deleteIngredient(ingredient.id, props.meal_id)
        }
        
    }
    
    console.log("Ingredients list props: ", props)
    return (
        <div>
            {props.ingredients.map(ingredient => <li key={ingredient.id} ><Ingredient ingredient={ingredient} meal_id={props.meal_id}/> 
               
            {props.meal_id ? <button className='btn btn-outline-primary btn-sm' onClick = {() => handleButtonClick(ingredient, props.action)}>{props.action=="Add"?"Add":"Delete"}</button>:
            <button className='btn btn-outline-primary btn-sm' onClick = {() => handleButtonClick(ingredient, "Delete")}>Delete</button>}
            <div id={"ingr-" + ingredient.id}></div> </li>)}
        </div>
    )

}
export default connect(null, {deleteIngredient, addIngredient})(IngredientsList);