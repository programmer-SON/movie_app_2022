import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    count: 0
  };

  /**
   * setState 호출시 render가 새로 호출
   */
  add = () => {
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  };

  render(){
    return( 
    <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
      );
  }
}

export default App;
