import React from "react"

function Joke(props) {
    console.log(props)
    return (
        <div className="joke">
            <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>
            <h3 style={{color: !props.question && "red"}}>Answer: {props.punchLine}</h3>
            <hr />
        </div>
    )
}

export default Joke