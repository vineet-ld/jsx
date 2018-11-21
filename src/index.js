import React from "react"
import ReactDOM from "react-dom"

const App = () => {

    const buttonText = "Click Me!";

    return (
        <div>
            <label htmlFor="name" className="label">Enter name: </label>
            <input type="text" id="name"/>
            <button style={{backgroundColor: "blue", color: "white"}}>{buttonText}</button>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));