import React from 'react'
import IngredientsContainer from '../containers/IngredientsContainer.js'
import ReactDOM from 'react-dom';


const Meal = (props) => {  
    
    const meal = props.meals[props.match.params.id -1]
    // const meal = props.meal
    const showMeal =() => {
        ReactDOM.render(mealCard(meal),document.getElementById("mealDiv"))
    }

    const showIngredients = () => {
        console.log("Inside showIngredients", meal)
        return (
            <IngredientsContainer meal={meal}/>
        )
    }
    
    const mealCard=() =>{
        console.log("Inside Meal Card", meal)
        return (
            <div className="card" style={{width: '18rem', marginTop: '10px', marginLeft: '10px'}}>
              <div className="card-body">
                <p className="card-title"><b> {meal.name}</b></p>
                <p className="card-text mb-0"> {meal.description}</p>
                <p className="card-text mb-0"> Calories: {meal.kcal}</p>
                <p className="card-text mb-0"> Fats: {meal.fats}g</p>
                <p className="card-text mb-0"> Carbs: {meal.carbs}g</p>
                <p className="card-text mb-0"> Sugars: {meal.sugars}g</p>
                <p className="card-text mb-0"> Fiber: {meal.fiber}g</p>
                <p className="card-text mb-0"> Protein: {meal.protein}g</p>                
                
                <p className="card-text mb-0"><a href={"/meals/"+meal.id+"/ingredients"}>Ingredients</a></p> 
                
              </div>
            </div>
        )
    }
    return (
        <div>
          <div className="row">
            <div className = "col-6" >  
                {meal ?                 
                    (<div className="card" style={{width: '18rem', marginTop: '10px', marginLeft: '10px'}}>
                        <div className="card-body">
                            <p className="card-title"><b> {meal.name}</b></p>
                            <p className="card-text mb-0"> {meal.description}</p>
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