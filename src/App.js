import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentName from './ComponentName'

class App extends Component {
  // App is a child class (of Component) that inherits props and methods from Component
  constructor(props) {
    super(props)
    // the super method calls the constructor of the parent class (here, Component)
    // super basically runs Component.constructor()
    this.state = {
      someState: 'some value'
    // we use this.state to set up properties that we may want to change
    // for example, an input box that expects email
    // 2 people wouldn't be putting in the same email address
    // the input for our email field may not always be the same but we're still an expecting an email address
    }
  }
  // OOP lesson/Inheritance section: https://git.generalassemb.ly/ga-wdi-lessons/js-oojs-full-day#inheritance-15-minutes--130
  // I added the constructor for demonstration; not a part of the basic app
  // We use constructor to define methods and stateful properties
  // If a component isn't going to manage state, we don't need or use constructor
  render() {
  // render is a method that returns one HTML element (here, one div)
  // it can only send back 1 HTML element per return call
    return (
      <div className="App">
      {/* put stuff here that you want rendered on your page
       for example, hello world */}
        <p>Hello world!</p>
        <ComponentName />
      </div>
    );
  }
}

export default App;
