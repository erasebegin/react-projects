import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
      return (<div><h1>My First React Component!</h1></div>)
      }
}

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'))

export default 'MyComponent';


