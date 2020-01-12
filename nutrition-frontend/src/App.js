import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import MealsContainer from './containers/MealsContainer.js'
import NavBar from './components/NavBar'


class  App extends Component{

  render () {
    
  return (
    <div>
        <NavBar color="purple" title="NUTRITION CALCULATOR" />
        <div className="container">
          <MealsContainer />
        </div>
        
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
export default App;
