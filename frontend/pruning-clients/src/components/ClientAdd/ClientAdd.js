import React, { Component } from "react";
import "./ClientAdd.css"
import Axios from 'axios';

class ClientAdd extends Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div>
                <h1> add new client</h1>
                <p>
                  <label for="">Name </label> 
                  <input type="text" name="title" required/>      
                </p>


            </div>
        )
    }
}
export default ClientAdd