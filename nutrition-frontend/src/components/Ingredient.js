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
            <div className="card" style={{width: '18rem', marginTop: '10px', marginLeft: '10px'}}>
              <div className="card-body">
                <p className="card-text mb-0"> Measure: {ingredient.measure}</p>
                <p className="card-text mb-0"> Calories: {ingredient.kcal}</p>
                <p className="card-text mb-0"> Fats: {ingredient.fats}g</p>
                <p className="card-text mb-0"> Fiber: {ingredient.fiber}g</p>
                <p className="card-text mb-0"> Protein: {ingredient.protein}g</p> 
                {props.meal_id && <p className="card-text mb-0"> Servings:<input type="text" id={"serv-" + ingredient.id} name="servings" defaultValue="1"/></p>}

              </div>
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