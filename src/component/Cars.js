import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Car = props => (
    <tr>
        <td>{props.cars.name}</td>
        <td>{props.cars.price}</td>
        <td>{props.cars.wheel}</td>
        <td>
            <Link to={"/edit/"+props.cars._id}>Edit</Link>
        </td>
    </tr>
)


class Cars extends Component{
    constructor(props){
        super(props)

        this.state ={
            cars : []
        };
    }
componentDidMount(){
    axios.get('http://localhost:3000/car/')
        .then(response => {
            this.setState({
                cars:response.data
            })
        })
        .catch(err =>{
            if(err){
                console.log(err)
            }
        })
}

CarList(){
    return this.state.cars.map(function(currentCar, i){
        return <Car cars={currentCar} key={i}/>
    })
}

render(){
    return(
        <div>
           <div>
                <h3>Car List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Wheel</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        { this.CarList() }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
}


export default Cars;