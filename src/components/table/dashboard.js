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
    //   console.log(this.state);

    //   console.log(allCenters);
        // console.log(allData);
    
      
    let allData = this.state.allCenters.filter(e => e.services_offered.includes(input)).map((e, i) => 
    (
        
        // BORDER="5"    WIDTH="50%"   CELLPADDING="4" CELLSPACING="3"
        <div  className="tableDiv"   key={i} >
         <div className="styleTable">
            <table className="table">
                <tbody className="tbody">
                        
                        <tr className="trMain">
                            <td className="tdStyle1" >{e.organization}</td>
                            <td className="tdStyle2" >{e.services_offered}</td>
                            <td className="tdStyle3" >{e.address}</td>
                            <td className="tdStyle4" >{e.hours}</td>
                            <td className="tdStyle5" >{e.phone}</td>
                            <td className="tdStyle6" >{e.maplink}</td>
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
        <div className="tabHeadTop">
            <table className="tableHead" >
                <thead>
                    {/* table headers */}
                    <tr>
                        <th className="tabHead1">Organization</th>
                        <th className="tabHead2">Services Offered</th>
                        <th className="tabHead3">Website</th>
                        <th className="tabHead4">Hours</th>
                        <th className="tabHead5">Phone Number</th>
                        <th className="tabHead6">Maplink</th>
                    </tr>
                </thead>
            </table>
            </div>
            {allData}
            
        </div>
    )
    
  }
}
// }
