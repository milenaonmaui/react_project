import React, { Component } from 'react'
import ReactDOM from 'react-dom';

const Ingredient = (props) => {
    const showIngredient =() => {
        let divId = "ingr-" + props.ingredient.id
        let ingrDiv = document.getElementById(divId)
        ReactDOM.render(ingredientCard(props.ingredient),document.getElementById(divId))
    }

    const ingredientCard=(ingredient) =>{
        return (
            <div class = "Ingr-card">
                <p> Measure: {ingredient.measure}</p>
                <p> Calories: {ingredient.kcal}</p>
            </div>
        )
    }

    return (
        <React.Fragment>
            <button className="btn btn-link" onClick={showIngredient}>
                {props.ingredient.name} 
           </button>     
        </React.Fragment>
    )

}
export default Ingredient;