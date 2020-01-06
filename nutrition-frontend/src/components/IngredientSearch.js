import React, { Component } from 'react'

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
        this.setState({ ingredients: data})
        console.log("Fetch ingredients state", this.state.ingredients)
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
      </div>
    )
  }

}

export default IngredientSearch