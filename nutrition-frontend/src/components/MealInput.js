import React from 'react'
import {connect} from 'react-redux'
import {addMeal} from '../actions/addMeal.js'
import {Redirect} from 'react-router-dom';

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
        this.props.history.push('/meals')
    }

    render(){
        return(
            <div className="card" style={{width: '30rem', marginTop: '10px'}}>
              <div className="card-body">
                <h5 className="card-title">Create a new meal:</h5>
                <form onSubmit = {this.handleSubmit}>
                
                    <div className="form-group-row">
                        <label className="col-sm-4 col-form-label">Name:</label>
                        <input type="text" id ="name" name="name" required value={this.state.name} onChange={this.handleChange}/>
                   </div>

                   <div className="form-group-row">
                        <label className="col-sm-4 col-form-label">Description:</label>
                        <input type="text" id ="name" name="description" value={this.state.description} onChange={this.handleChange}/>
                   </div>
                   <input type="submit" value="Save"/>
               
                </form>
            
              </div>
            </div>
          
        )
    }
}

export default connect(null, {addMeal})(MealInput);