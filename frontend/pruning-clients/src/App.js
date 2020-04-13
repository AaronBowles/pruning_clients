import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from "./components/Home/Home";
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
      this.setState({clients: res.data});
    });
  }

  render() {

    return (
      <div>
        <h1> Hello</h1>

        <main>
          <Switch>
            <Route exact path="/"
            render={props => (
              <Home 
              clients = {this.state.clients}
              />
            )}
          />
            
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
