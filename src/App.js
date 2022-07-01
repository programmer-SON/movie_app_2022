import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{

  // 호출 1
  constructor(props){
    super(props)
    console.log("hello");
  }

  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  };

  // 호출 3
  componentDidMount(){
    console.log("component rendered");
  }

  // 수정시 호출
  componentDidUpdate(){
    console.log("I just updated");
  }

  // 컴포넌트 삭제시 호출 (수정이 일어나면 기존 컴포넌트가 삭제되는것으로 추정)
  componentWillUnmount(){
    console.log("Goodbye, cruel world");
  }

  // 호출 2
  render(){
    console.log("I am rendering");
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
