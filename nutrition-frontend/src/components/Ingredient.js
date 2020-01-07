import React, { Component } from 'react'


const Ingredient = (props) => {
    const showIngredient =() => {
        let divId = "ingr-" + props.ingredient.id
        let ingrDiv = document.getElementById(divId)
        ingrDiv.innerHTML += 'Ingredient details';
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