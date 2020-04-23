import React, { Component } from "react";
import "./ClientList.css"
import Axios from 'axios';

class ClientList extends Component {
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
                                <th> Address </th>
                                <th> Email </th>
                                <th> Phone </th>
                                <th> Service </th>
                                <th> Primary Plants </th>
                                <th> Notes </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                            <td> {item.lastName}</td>
                            <td> {item.firstName}</td>   
                            <td> {item.address}, {item.city}, {item.state}, {item.zip}</td> 
                            <td> {item.email}</td>
                            <td> {item.phone} </td>   
                            <td> 
                                <ul>
                                  <li>
                                    {item.serviceDate['2019']}, {item.pruningHours['2019']}, {item.haulHours['2019']} 
                                  </li>
                                  <li>
                                  {item.serviceDate['2018']}, {item.pruningHours['2018']}, {item.haulHours['2018']} 
                                  </li>
                                </ul>
                            </td>
                            <td> {item.primaryPlants} </td>
                            <td> {item.notes} </td>

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
export default ClientList;