import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import {fetchMeals} from './actions/fetchMeals' 
import MealsContainer from './containers/MealsContainer.js'
class  App extends Component{

  componentDidMount(){
    
  }
  render () {
    console.log(this.props)
  return (
    <div className="App">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MealsContainer />
    </div>
  );
}
}

//in this case we don't care to map state to props,
//just want to fetch and update store

//const mapStateToProps = ()  =>{
//  return {
//    meals: state.meals
//  }

//}
export default connect(null, {fetchMeals})(App);
