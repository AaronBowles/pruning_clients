import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ClientList from "./components/ClientList/ClientList";
import Detail from "./components/Detail/Detail";
import ClientAdd from "./components/ClientAdd/ClientAdd";
import Home from "./components/Home/Home"
import Axios from 'axios';


class App extends Component {
  constructor(state) {
    super(state)
    this.state = {
   
    }
  }

  // componentDidMount() {
  //   Axios.get('https://pruning-client-backend.herokuapp.com/clients')
  //   .then(res => {
  //     console.log(res.data);
  //     this.setState({clients: res.data});
  //   });
  // }

  render() {
    
    return (
      <div>
        <header>
          <nav>
            <Link to="/"> Home </Link>
            <Link to="/detail"> Detail </Link>
            <Link to="/add"> add </Link>
            <Link to= "/clientList">Client List</Link>
          </nav>
        </header>
        <h1> Pruning Clients Organizer </h1>
        <main>
          <Switch>
            <Route exact path="/"
            render={props => (
              <Home
              // clients = {this.state.clients}
              />
            )}
          />
                      <Route exact path="/detail"
            render={props => (
              <Detail 
             // clients = {this.state.clients}
              />
            )}
          />
          <Route exact path ="/add" 
          render={props => (
          <ClientAdd/>
          )}
          />
          <Route exact path ="/clientList" 
          render={props => (
          <ClientList/>
          )}
          />
            
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
