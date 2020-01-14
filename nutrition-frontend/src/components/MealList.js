import React from 'react'
import {Route, Link} from 'react-router-dom'
import Meal from './Meal.js'

const MealList = (props) => {
    
    return (
        <div className="card" style={{width: '30rem', marginTop: '10px'}}>
              <div className="card-body">
                <h5 className="card-title">Meals</h5>
                <div><Link to="/meals/new">Add a meal</Link></div>
                <ul>
                    {props.meals.map((meal, id) => <li className="card-body" key={meal.id}><Link to = {`/meals/${meal.id}`}>{meal.name}</Link></li>)}
                </ul>
            </div>
        </div>
    )

}
export default MealList;