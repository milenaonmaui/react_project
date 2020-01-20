import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import MealsContainer from './containers/MealsContainer.js'
import IngredientsContainer from './containers/IngredientsContainer.js'
import HomeContainer from './containers/HomeContainer.js'
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class  App extends Component{

  render () {
    
  return (
    <div className = "App">
       <Router>
        <div>
          <NavBar title="NUTRITION CALCULATOR"/>
          <Route exact path="/"> <HomeContainer/> </Route>
          <Route path='/meals' render={routerProps => <MealsContainer {...routerProps}/>} />
          <Route path='/ingredients' render={routerProps => <IngredientsContainer {...routerProps}/>} />
         
        </div>
      </Router>
       
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
