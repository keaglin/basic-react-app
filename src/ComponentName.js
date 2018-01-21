// you have to import the Component class from React
import React, { Component } from 'react'

// you can replace ComponentName with anything you want
// for example, BlogArticle
class ComponentName extends Component {
  // you have to run render()
  render() {
    // you have to have a return statement inside render()
    return (
      // you have to return an HTML element ie a div
      <div>ComponentName</div>
    )
  }
}
// export it to make it available to the rest of your app 
// once it's exported, you can use it via import statement
// in this example, we'll be importing it straight into our top-level component (App.js)
export default ComponentName