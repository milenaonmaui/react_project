import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteMeal} from '../actions/deleteMeal.js'

const MealList = (props) => {
    const handleButtonClick = (meal) => {
        props.deleteMeal(meal.id)
    }

    return (
        <div className="card w-75" >
              <div className="card-body">
                <h5 className="card-title">Meals</h5>
                <div><Link to="/meals/new">Add a meal</Link></div>
                <ul>
                    {props.meals.map((meal, id) => <li className="card-body" key={meal.id}><Link to = {`/meals/${meal.id}`}>{meal.name}</Link>
                    <button className='btn btn-outline-primary btn-sm ml-2' onClick = {() => handleButtonClick(meal)}>Delete</button>
                    </li>)}
                </ul>
            </div>
        </div>
    )

}
export default connect(null, {deleteMeal})(MealList);