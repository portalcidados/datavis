// Template for components. How to use this:
// - Read all TODO comments, they are important
// - After you implement everything you need, go to the `webpack.config.js` file and
//   add your component to the `entry` object, such as:
//   `entry: {
//     "my_component": "./src/components/my_component/my_component.js"
//   }`
// - Then, when building the project, your component will be bundled into `dist/bundle_my_component.js`

import React, { Component } from "react";
import ReactDOM from "react-dom";
// TODO: import whatever you need

class App extends Component {
  render() {
    // TODO: Add your code here
    return <div />;
  }
}

ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById("base-component") // TODO: Change this to your div id. A div with this ID must exist in the HTML file
);
