import React from 'react'
import {connect} from 'react-redux'
import {fetchMeals} from '../actions/fetchMeals.js'
import MealList from '../components/MealList.js'
import Meal from '../components/Meal.js'
import MealInput from '../components/MealInput.js'
import {Route, Switch} from 'react-router-dom'

class MealsContainer extends React.Component {
    componentDidMount(){
        this.props.fetchMeals()
        
    }

    render(){
        console.log("Meals", this.props.meals)
        return (
            <div>
                <Switch>
                    <Route path='/meals/new' component = {MealInput}/>
                    <Route path='/meals/:id' render ={(routerProps) =><Meal {...routerProps} meals={this.props.meals}/>}/>
                    <Route exact path='/meals' render ={() =><MealList meals={this.props.meals}/>}/>
                 </Switch>  
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        meals: state.meals
    }
}
export default connect(mapStateToProps, {fetchMeals})(MealsContainer);