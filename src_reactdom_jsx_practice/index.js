import React from "react"
import ReactDOM from "react-dom"
import MyComponent from "./MyComponent"

// Notes:
// - first arg could be HTML and second arg could be js targeting root
// - JS doesnt react to < or > as greater/less than because React interprets 
// this is JSX (this is what import React does)
// - this file will eventually be interpreted down to plain JS
// - first arg must be one element (e.g. div wrapping stuff) this is true 
// for components as well

ReactDOM.render(<MyComponent />, document.getElementById("root"))