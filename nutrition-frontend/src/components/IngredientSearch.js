import React, { Component } from 'react'
import IngredientsList from './IngredientsList.js'

class IngredientSearch extends Component {

  state = {
    query: "",
    ingredients: []
  }

  handleSubmit = event => {
    event.preventDefault()
    this.fetchIngredients(this.state.query)
  }

  fetchIngredients = (query) => {
    fetch(`http://localhost:3001/api/ingredients?q=${query}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ ingredients: data});
      })
  }

  render() {
    return (
      <div className="m-2">
        <form onSubmit={this.handleSubmit}>
        <h5>Search Ingredients </h5>
          <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
          <button className='btn btn-primary ml-1' type="submit">Search</button>
        </form>
        <IngredientsList ingredients={this.state.ingredients} meal_id={this.props.meal_id} action={"Add"}/>
      </div>
    )
  }

}

export default IngredientSearch