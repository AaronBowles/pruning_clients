import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Axios from 'axios';


class App extends Component {
  constructor(state) {
    super(state)
    this.state = {
      clients:""
    }
  }

  componentDidMount() {
    Axios.get('https://pruning-client-backend.herokuapp.com/clients')
    .then(res => {
      console.log(res.data);
      this.setState({cleints: res.data});
    });
  }

  render() {

    return (
      <div>
        <h1> Hello</h1>
      </div>
    )
  }
}

export default App;
