import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail"
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
        <header>
          <nav>
            <Link to="/"> Home </Link>
            <Link to="/detail"> Detail </Link>
          </nav>
        </header>
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
                      <Route exact path="/detail"
            render={props => (
              <Detail 
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
