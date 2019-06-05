import React , {Component } from 'react'
import axios from 'axios';

class AddCars extends Component{

    constructor(props){
        super(props);

        this.state = {
            name:'',
            price:'',
            wheel:''
        }

        this.onNamechange = this.onNamechange.bind(this);
        this.onPricechange = this.onPricechange.bind(this);
        this.OnWheelchange = this.OnWheelchange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onNamechange(e){
        this.setState({
            name:e.target.value
        });
   
    }
    onPricechange(e){
        this.setState({
            price:e.target.value
        });
        
    }

    OnWheelchange(e){
        this.setState({
            wheel:e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();

        const newCar ={
            name:this.state.name,
            price:this.state.price,
            wheel:this.state.wheel
        };

        axios.post('http://localhost:3000/car/add',newCar)
            .then(res => {
                console.log(res.data)
                alert("Data Added")
            
            })
            

        console.log("----------------Form Submitted -------------");
        console.log(`Name : ${this.state.name}`);
        console.log(`Price : ${this.state.price}`);
        console.log(`WHeel : ${this.state.wheel}`);

    }




render(){
    return(
        <div style={{marginTop: 10}}>
        
  <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label >Car Name</label>
                <input type="text" className="form-control" placeholder="Enter Car Name"
                onChange={this.onNamechange}
                value={this.state.name}
                />

            </div>
            <div className="form-group">
                <label >Car Price</label>
                <input type="number" className="form-control" placeholder="Enter Car Price"
                onChange={this.onPricechange}
                value ={this.state.price}
                
                />
            </div>
            <div className="form-group">
                <label >Car Wheels</label>
                <input type="number" className="form-control" placeholder="Enter Car Wheels"
                onChange={this.OnWheelchange}
                value={this.state.wheel}
                />
            </div>
           
            <input type="submit" value="Done" className="btn btn-primary"/>
     </form>
     </div>
                    
    )
}

}

export default AddCars;