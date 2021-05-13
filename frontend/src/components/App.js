import React, { Component } from "react"
import { render } from "react-dom"
import Button from "@material-ui/core/Button"
import { AppBar, Toolbar } from "@material-ui/core"


export default function App() {

    return (
        <div id='main'>
            
            
            <h1>enter the space</h1>
            <Button variant="contained" color="default">
                Hello Cosmos
            </Button>
        </div>
    )
}

const appDiv = document.getElementById("app")
render (<App />, appDiv)

