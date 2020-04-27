import React, { Component } from "react";
import "./ClientAdd.css"
import Axios from 'axios';


class ClientAdd extends Component {
    constructor(){
        super();

        this.state = {
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            phone: "",
            email: "",
             "2019 service": null,
             "2018 service": null,
             "2019 hours": null,
             "2018 hours": null,
             "2019 haul": null,
             "2018 haul": null,
            primaryPlants: "",
            notes: "",
            serviceDate: null,
            pruningHours: {},
            haulHours: {}

        }
    }

    componentDidUpdate(prevProps,prevState){

        if(this.state.serviceDate !== null){

            Axios.post("https://pruning-client-backend.herokuapp.com/clients", 
            this.state, { headers: {
                'Content-Type': 'application/json',

            },
            auth: {
                username: 'bowles',
                password: 'bowles'
            }
        }
            )
            .then(function(response){
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
        }
         
    }
    set = event => {
        console.log(event.target.value)
        this.setState({[event.target.id]:event.target.value})
        
    }
    setProps = event => {
        console.log(event.target.value)
        this.setState({[event.target.id]:event.target.value})
        
    }

    submit = event => {

        this.setState({ serviceDate: {"2019": this.state["2019 service"],
                                      "2018": this.state["2018 service"]
                                     }
                      })
        this.setState({ pruningHours: {"2019": this.state["2019 hours"],
                                       "2018": this.state["2018 hours"]
                                      }
      })        
        this.setState({ haulHours: {"2019": this.state["2019 haul"],
                                    "2018": this.state["2018 haul"]
                                    }
})      
        this.setState({zip: parseInt(this.state.zip)})
    delete this.state["2019 service"]
    delete this.state["2018 service"]
    delete this.state["2019 hours"]
    delete this.state["2018 hours"]
    delete this.state["2019 haul"]
    delete this.state["2018 haul"]    
    }
  


    render() {
        return (
            <div>
                <h1> add new client</h1>
                <p>
                  <label for="firstName">First Name </label> 
                  <input id="firstName" type="text" name="title" required onChange={this.set}/>      
                </p>
                <p>
                  <label for="lastName">Last Name </label> 
                  <input id="lastName" type="text" name="title" required onChange={this.set}/>      
                </p>
                <p>
                  <label for="email"> Email</label> 
                  <input id="email" type="text" name="title" required onChange={this.set}/>      
                </p>
                <p>
                  <label for="phone"> Phone Number </label> 
                  <input id="phone" type="text" name="title" required onChange={this.set}/>      
                </p>
                <p>
                  <label for="address"> Address </label> 
                  <input id="address" type="text" name="title" required onChange={this.set}/>      
                </p>
                <p>
                  <label for="city"> City </label> 
                  <input id="city" type="text" name="title" required onChange={this.set}/>      
                </p>
                <p>
                  <label for="state"> State </label> 
                  <input id="state" type="text" name="title" required onChange={this.set}/>      
                </p>
                <p>
                  <label for="zip"> Zip </label> 
                  <input id="zip" type="text" name="title" required onChange={this.set}/>      
                </p>
                <p>
                  <label for="2019 service"> Service Date 2019 </label> 
                  <input id="2019 service" type="text" name="title" required onChange={this.setProps}/>      
                </p>
                <p>
                  <label for="2018 service"> Service Date 2018 </label> 
                  <input id="2018 service" type="text" name="title" required onChange={this.setProps}/>      
                </p>
                <p>
                  <label for="2019 hours"> Pruning Hours 2019 </label> 
                  <input id="2019 hours" type="text" name="title" required onChange={this.setProps}/>      
                </p>
                <p>
                  <label for="2018 hours"> Pruning Hours 2018 </label> 
                  <input id="2018 hours" type="text" name="title" required onChange={this.setProps}/>      
                </p>
                <p>
                  <label for="2019 haul"> Haul Hours 2019 </label> 
                  <input id="2019 haul" type="text" name="title" required onChange={this.setProps}/>      
                </p>
                <p>
                  <label for="2018 haul"> Haul Hours 2018 </label> 
                  <input id="2018 haul" type="text" name="title" required onChange={this.setProps} />      
                </p>
                <p>
                  <label for="primaryPlants"> Primary Plants </label> 
                  <input id="primaryPlants" type="text" name="title" required onChange={this.set} />      
                </p>
                <p>
                  <label for="notes"> Notes </label> 
                  <input id="notes" type="text" name="title" required onChange={this.set} />      
                </p>

                <button onClick={this.submit}>submit</button>
                


            </div>
        )
    }
}
export default ClientAdd