import React from "react"
import "./style.css"

// Left off with Class-based Components Practice (https://scrimba.com/p/p7P5Hd/crV6eSv)

class App extends React.Component {

  yourMethodHere() {

  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h1>{this.props.whatever}</h1>
      </div>
    )
  }
}

export default App
