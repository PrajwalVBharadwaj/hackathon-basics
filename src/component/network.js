import React from "react"
import axios from "axios"

class NetworkComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: {}
        }
    }
    componentDidMount(){
        axios.get("https://api.covid19api.com/summary").then(response=>{
            this.setState({count:response.data.Global})
        })
    }
    render(){
        return <div>
            <h1>World covid tracker</h1>
            {this.state.count?<table>
                <tr>
                    <th>New confirmed</th>
                    <th>New Deaths</th>
                    <th>New Recovered</th>
                    <th>Total Confirmed</th>
                    <th>Total Deaths</th>
                    <th>Total Recovered</th>
                </tr>
                <tr>
            <td>{this.state.count.NewConfirmed}</td>
            <td>{this.state.count.NewDeaths}</td>
            <td>{this.state.count.NewRecovered}</td>
            <td>{this.state.count.TotalConfirmed}</td>
            <td>{this.state.count.TotalDeaths}</td>
            <td>{this.state.count.TotalRecovered}</td>
                </tr>
                
                </table>:<h1>Loading...</h1>}            
        </div>
    }
}

export default NetworkComponent;