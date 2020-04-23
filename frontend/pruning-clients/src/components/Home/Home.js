import React, { Component } from "react";
import "./Home.css";
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
      super(props);
      this.state= {
          
      }
  }
  
      render() {
          return (
              <div>
                  <h1>Home </h1>
                  <Link to="/clientList"> <button> View Client List </button></Link>
              </div>
          )
      }
  }
  export default Home;