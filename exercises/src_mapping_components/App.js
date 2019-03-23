import React from "react"
import Joke from "./Joke"
import jokesData from "./jokesData"

function App() {

    // map() function will take a function as an arg that gets each value in an array/list
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    //
    // if you only have one parameter then you dont need to do (joke) => {} for an arrow function
    // you can just do joke => {}
    //
    // this returns an array of components
    //
    // using a key is best practice, but not needed for this example
    //
    // jokeComponents is meant to mimic an API call that returns JSON, which is what would happen
    // in the "real world"
    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

    return (
        <div className="app">
            {/* React magically renders all components in arrays that contain components */}
            {jokeComponents}
        </div>
    )
}

export default App