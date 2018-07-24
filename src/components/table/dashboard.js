import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';
import '../../Assets/css/default.min.css';


export default class Dashboard extends Component {
    constructor(props){
      super(props)

      this.state = {
        allCenters: [],
        input: ''
      };

      this.getRequest = this.getRequest.bind(this);
      this.handleInput = this.handleInput.bind(this);
    //   this.deleteHome = this.deleteHome.bind(this);
    }

    componentDidMount() {
      this.getRequest();
    }
    
    getRequest() {
        axios.get("http://localhost:4000/api/centers").then(res => {
          this.setState({ allCenters: res.data });
        });
      }

      handleInput(val){
          this.setState({
              input: val
          })
      }


  render() {  
      const { input } = this.state;
      console.log(this.state);

    //   console.log(allCenters);
        // console.log(allData);
    
      
    let allData = this.state.allCenters.filter(e => e.services_offered.includes(input)).map((e, i) => 
    (
        
        // BORDER="5"    WIDTH="50%"   CELLPADDING="4" CELLSPACING="3"
        <div  className="tableDiv"   key={i} >
         <div className="styleTable">
            <table className="table">
                <tbody>
                        <tr>
                            {/* <th >
                            </th> */}
                        </tr>
                        <tr >
                            <td >{e.organization}</td>
                            <td >{e.services_offered}</td>
                            <td >{e.address}</td>
                            <td >{e.hours}</td>
                            <td >{e.phone}</td>
                            <td >{e.maplink}</td>
                        </tr>
                </tbody>
            </table>
            </div>
        </div>
        
      ));
    
    return(
        


        <div>
            <h2>Help Centers</h2>
            <hr/>
            <input className='inputSearch' placeholder="Search"
            onChange={(event) => this.handleInput(event.target.value)}/>

            <table className="table table-striped" >
                <thead>
                    {/* table headers */}
                    <tr>
                        <th scope="col">Organization</th>
                        <th scope="col">Services Offered</th>
                        <th scope="col">Address</th>
                        <th scope="col">Hours</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Maplink</th>
                    </tr>
                </thead>
            </table>
            {allData}
        </div>
    )
    
  }
}
// }
