import React from 'react'
import ReactDOM from 'react-dom';

const Ingredient = (props) => {
    const showIngredient =() => {
        let divId = "ingr-" + props.ingredient.id
        let ingrDiv = document.getElementById(divId)
        if (ingrDiv.innerHTML === "")
            ReactDOM.render(ingredientCard(props.ingredient),document.getElementById(divId))
    
        else {
            if (ingrDiv.style.display === "none") {
                ingrDiv.style.display = "block";
              } else {
                ingrDiv.style.display = "none";
            } 
        }
    }
  
    
    const ingredientCard=(ingredient) =>{
        return (
            <div className="card" style={{width: '15rem', marginTop: '2px', marginLeft: '2px'}}>
              <div className="card-body">
                <p className="card-title"><b> {ingredient.name}</b></p>
                <p className="card-text mb-0"> Measure: {ingredient.measure}</p>
                <p className="card-text mb-0"> Calories: {ingredient.kcal}</p>
                <p className="card-text mb-0"> Fats: {ingredient.fats}g</p>
                <p className="card-text mb-0"> Carbs: {ingredient.carbs}g</p>
                <p className="card-text mb-0"> Sugars: {ingredient.sugars}g</p>
                <p className="card-text mb-0"> Fiber: {ingredient.fiber}g</p>
                <p className="card-text mb-0"> Protein: {ingredient.protein}g</p> 
                {props.meal_id && <p className="card-text mb-0"> Servings:<input type="text" style={{width: '3rem'}} id={"serv-" + ingredient.id} name="servings" defaultValue="1" value = {ingredient.ingredient_amount}/></p>}

              </div>
            </div>
        )
    }
    
    return (
        <React.Fragment>
            <button className="btn btn-link"  onClick={showIngredient}>
                {props.ingredient.name} 
           </button>     
        </React.Fragment>
    )

}
export default Ingredient;