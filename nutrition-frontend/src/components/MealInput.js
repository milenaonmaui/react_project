import React from 'react'
import {connect} from 'react-redux'
import {addMeal} from '../actions/addMeal.js'

class MealInput extends React.Component {
    state = {name: "", description: ""}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addMeal(this.state)
        this.setState({
            name: "", 
            description: ""
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Meal Name:</label>
                    <input type="text" placeholder = "Name" name="name" onChange = {this.handleChange} value = {this.state.name}/><br/>
                    <label>Description:</label>
                    <input type="text" placeholder = "Description" name="description" onChange = {this.handleChange} value = {this.state.description} />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addMeal})(MealInput);