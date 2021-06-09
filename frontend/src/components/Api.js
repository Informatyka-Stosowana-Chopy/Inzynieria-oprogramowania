import React, { Component } from 'react'
import axios from 'axios'

class Api extends Component {
    
    state={
        dataS:[]
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/')
        .then(res =>{
            this.setState({
                dataS:res.data
            })
            console.log(res.data);
        })
    }

    render() {
        return (
                <div>
            
                </div>
            )
        
    }
     
}

export default Api
