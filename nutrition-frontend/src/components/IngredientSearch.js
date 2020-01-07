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
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>Search Ingredients </label>
          <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
          <button className='btn btn-primary' type="submit">Search</button>
        </form>
        <IngredientsList ingredients={this.state.ingredients} meal_id={null}/>
      </div>
    )
  }

}

export default IngredientSearch