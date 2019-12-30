import React from 'react'
import {connect} from 'react-redux'
import {fetchMeals} from '../actions/fetchMeals.js'
import MealList from '../components/MealList.js'
import MealInput from '../components/MealInput.js'
class MealsContainer extends React.Component {
    componentDidMount(){
        this.props.fetchMeals()
        
    }

    render(){
        console.log("Meals", this.props.meals)
        return (
            <div>
              <MealInput /><br/>
              <MealList meals={this.props.meals}/>
                
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