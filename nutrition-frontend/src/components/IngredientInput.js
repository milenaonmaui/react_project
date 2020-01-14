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
        
        let mealId= this.props.meal.id
        
        return(
            <div className="card" style={{width: '30rem', marginTop: '10px'}}>
              <div className="card-body">
                <h5 className="card-title">Create new ingredient:</h5>
                <form onSubmit = {this.handleSubmit}>
                
                    <div className="form-group-row">
                        <label className="col-sm-4 col-form-label">Name:</label>
                        <input type="text" id ="name" name="name" value={this.state.name} onChange={this.handleChange}/>
                   </div>
                   <div className="form-group">
                        <label className="col-sm-4 col-form-label">Calories:</label>
                        <input type="text" name="kcal" value={this.state.kcal} onChange={this.handleChange}/>
                   </div>
                   <div className="form-group">
                        <label className="col-sm-4 col-form-label">Measure:</label>
                        <select name="measure" value={this.state.measure} onChange={this.handleChange}>
                            <option>1 cup</option>
                            <option>1 tbs</option>
                            <option>1 oz</option>
                            <option>1 count</option>
                        </select>
                    </div>
                    
                    {mealId &&<div className="form-group">
                        <label className="col-sm-4 col-form-label">Servings:</label>
                        <input type="text" name="servings" value={this.state.servings} onChange={this.handleChange}/>
                    </div>}
                           
                    <input type="submit" value="Save"/>
               
                </form>
            
              </div>
            </div>
        )
    }
}

export default connect(null, {addIngredient})(IngredientInput)