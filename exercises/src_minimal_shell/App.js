import React from 'react';
import "./style.css"

import React from "react"

// function App(props) {
//     return (
//         <div>
//             <h1>{props.whatever}</h1>
//         </div>
//     )
// }

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

