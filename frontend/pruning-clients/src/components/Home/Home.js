import React, { Component } from "react";
import "./Home.css"
import Axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state= {
        clients: null

    }
}
componentDidMount() {
    Axios.get('https://pruning-client-backend.herokuapp.com/clients')
    .then(res => {
      console.log(res.data);
      this.setState({clients: res.data});
    });
  }
// componentDidUpdate(prevProps, prevState){
//     console.log(this)
//     if(prevProps.clients !== this.props.clients){
//         this.setState({clients: this.props.clients})
//     }

// }
    render() {
        // let clientList = null
        // if(this.state.clients != null){
        // clientList = this.state.clients.map(item => {
        //     return (
        //         <div>
        //             <h1>Name:{item.lastName}</h1>
        //         </div>
        //     )
        // })
        // }
        let clientList = null
        if(this.state.clients != null){
            clientList = this.state.clients.map(item => {
                return (
                    <div>
                         <table>
                        <thead>
                            <tr>
                                <th> First Name </th>
                                <th> Last Name </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                            <td> {item.lastName}</td>
                            <td> {item.firstName}</td>                    
                            </tr>
                        </tbody>

                        </table>
                    </div>
                )
            }
                )
        }

        return (
            <div>
                <h1>Client List </h1>
                <div>
                    {clientList}
                    {/* <table>
                        <thead>
                            <tr>
                                <th> First Name </th>
                                <th> Last Name </th>

                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table> */}
                </div>
                
            </div>
        )
    }
}
export default Home;