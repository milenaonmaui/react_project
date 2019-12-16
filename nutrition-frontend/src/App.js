import React, {Component} from 'react';
import './App.css';

class  App extends Component{

  componentDidMount(){
    fetch('http://localhost:3000/api/meals')
    .then(response => response.json())
    .then(json => console.log(json))
  }
  render () {
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
      
    </div>
  );
}
}

export default App;
