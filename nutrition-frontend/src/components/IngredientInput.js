import React from 'react'
import {connect} from 'react-redux'
import {addIngredient} from '../actions/addIngredient.js'

class IngredientInput extends React.Component {
    state = {name: "", measure: "1 cup", kcal: "", servings: ""}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addIngredient(this.state, this.props.meal.id)
        this.setState({
            name: "", 
            measure: "1 cup",
            kcal: "",
            servings: ""
        })
    }



    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>Ingredient name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <br/>
                    <label>Calories:</label>
                    <input type="text" name="kcal" value={this.state.kcal} onChange={this.handleChange}/>
                    <label>Measure:</label>
                    <select name="measure" value={this.state.measure} onChange={this.handleChange}>
                        <option>1 cup</option>
                        <option>1 tbs</option>
                        <option>1 oz</option>
                        <option>1 count</option>
                    </select>
                    <br/>
                    <label>Servings:</label>
                    <input type="text" name="servings" value={this.state.servings} onChange={this.handleChange}/>
                    <br/>
                    <input type="submit" value="Save"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addIngredient})(IngredientInput)