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
            document.getElementById("ingr-" + ingredient.id).style.display = "none"
        }
        
    }
    
    console.log("Ingredients list props: ", props)
    
    return (
        <div>
            {props.ingredients.length > 0 ? 
            (<div className="card" style={{width: '20rem', marginTop: '2px', marginLeft: '2px'}}>
                <div className="card-body">
                    <ul className="list-group list-group-flush mb-0">
                        {props.ingredients.map(ingredient => <li className="list-group-item" key={ingredient.id} ><Ingredient ingredient={ingredient} meal_id={props.meal_id}/> 
                    
                        {props.meal_id ? <button className='btn btn-outline-primary btn-sm' onClick = {() => handleButtonClick(ingredient, props.action)}>{props.action==="Add"?"Add":"Delete"}</button>:
                        <button className='btn btn-outline-primary btn-sm' onClick = {() => handleButtonClick(ingredient, "Delete")}>Delete</button>}
                        <div id={"ingr-" + ingredient.id}></div> </li>)}
                    </ul>
                </div>
            </div>) : null}
         </div>
    )

}
export default connect(null, {deleteIngredient, addIngredient})(IngredientsList);