import React, { Component } from "react";
import "./Home.css"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state= {
        clients: null

    }
}

componentDidUpdate(prevProps, prevState){
    if(prevProps.clients !== this.props.clients){
        this.setState({clients: this.props.clients})
    }
}
    render() {
        let clientList = null
        if(this.state.clients != null){
        clientList = this.props.clients.map(item => {
            return (
                <div>
                    <h1>Name:{item.lastName}</h1>
                </div>
            )
        })
        }

        return (
            <div>
                <h1>Home </h1>
                <div>
                    {clientList}
                </div>
            </div>
        )
    }
}
export default Home;