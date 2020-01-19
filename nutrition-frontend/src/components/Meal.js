import React from 'react'
import IngredientsContainer from '../containers/IngredientsContainer.js'
import ReactDOM from 'react-dom';


const Meal = (props) => {  
    console.log("Meal props", props)
    const meal = props.meals.filter(m => m.id == props.match.params.id)[0]
    // const meal = props.meal
    /* const showMeal =() => {
        ReactDOM.render(mealCard(meal),document.getElementById("mealDiv"))
    }

    const showIngredients = () => {
        console.log("Inside showIngredients", meal)
        return (
            <IngredientsContainer meal={meal}/>
        )
    } */
    
    
    return (
        <div>
          <div className="row">
            <div className = "col-6" >  
                {meal ?                 
                    (<div className="card" style={{width: '18rem', marginTop: '10px', marginLeft: '10px'}}>
                        <div className="card-body">
                            <p className="card-title mb-0"><b> {meal.name}</b></p>
                            <p className="card-subtitle mb-2"> {meal.description}</p>
                            <p className="card-text mb-0"> Calories: {meal.kcal}</p>
                            <p className="card-text mb-0"> Fats: {meal.fats}g</p>
                            <p className="card-text mb-0"> Carbs: {meal.carbs}g</p>
                            <p className="card-text mb-0"> Sugars: {meal.sugars}g</p>
                            <p className="card-text mb-0"> Fiber: {meal.fiber}g</p>
                            <p className="card-text mb-0"> Protein: {meal.protein}g</p>                        
                        </div>
                    </div>): null}
            </div>
            <div className = "col-6">
                <IngredientsContainer meal={meal}/>
            </div>
         </div>
        </div>
    )
   /*  return (
        <React.Fragment>
            <button className="btn btn-link" onClick={showMeal}>
                {props.meal.name} 
           </button>     
        </React.Fragment>
    ) */
    /* return (
        <div>
            {mealCard(meal)}
            <IngredientsContainer meal={meal}/>
        </div>
    ) */
}
export default Meal;