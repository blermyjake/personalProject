import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';
import '../../Assets/css/default.min.css';
import Checkbox from 'rc-checkbox';

// const ReactDOM = require('react-dom');


export default class UserTable extends Component {
    constructor(props){
      super(props)

      this.state = {
        myData: [],
        userId: 0,
        input: ''
      };

      this.getUser = this.getUser.bind(this);
      this.getMyData = this.getMyData.bind(this);
      this.handleInput = this.handleInput.bind(this);
    //   this.deleteHome = this.deleteHome.bind(this);
    }

    componentDidMount() {
        this.getUser()
    }

    getUser(){
        axios.get("/api/getUser").then(res => {
            this.setState({
                userId: res.data.userid
            })
        }).then(() => {
            this.getMyData(this.state.userId)
        })
    }
    
    getMyData(id) {
        axios.get(`http://localhost:4000/api/userData/${id}`).then(res => {
          this.setState({ myData: res.data });
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
    
      
    let thisUserData = this.state.myData.map((e, i) => 
    (
        
        // BORDER="5"    WIDTH="50%"   CELLPADDING="4" CELLSPACING="3"
        <div  className="tableDiv"   key={i} >
         <div className="styleTable">
            <table className="table">
                <tbody className="tbody">
                        
                        <tr className="trMain">
                            <td className="tdStyleCheckBox"> <Checkbox className="checkStyle" /> </td>
                            <td className="tdStyle1User" >{e.organization}</td>
                            <td className="tdStyle2User" >{e.services_offered}</td>
                            <td className="tdStyle3User" >{e.address}</td>
                            <td className="tdStyle4User" >{e.hours}</td>
                            <td className="tdStyle5User" >{e.phone}</td>
                            <td className="tdStyle6User" >{e.maplink}</td>
                            <td className="tdStyle7User" >{e.userid}</td>
                        </tr>
                </tbody>
            </table>
            </div>
        </div>
        
      ));
    
    return(
        


        <div>
            <h2>Help Center Information</h2>
            <hr/>
            <input className='inputSearch' placeholder="Search"
            onChange={(event) => this.handleInput(event.target.value)}/>
            <hr/>
            
        <div className="tabHeadTop">
            <table className="tableHead" >
                <thead>
                    {/* table headers */}
                    <tr>
                        <th className="tabHead0User"></th>
                        <th className="tabHead1User">Organization</th>
                        <th className="tabHead2User">Services Offered</th>
                        <th className="tabHead3User">Website</th>
                        <th className="tabHead4User">Hours</th>
                        <th className="tabHead5User">Phone Number</th>
                        <th className="tabHead6User">Maplink</th>
                        <th className="tabHead7User">User Id</th>
                       
                    </tr>
                </thead>
            </table>
            </div>
            {thisUserData}
           
        </div>
    )
    
  }
}
// }







// export default class Table extends Component {
//     contructor(props){
//         super(props)
        

//         this.state = {
//             organization: 'Organization',
//             services: "Services Offered",
//             address: "Address",
//             hours: "Hours",
//             maplink: "Maplink",
//             phone: "Phone Number"

//         };

//     }

//     render() {
//         return (
//             <div >
                
//             </div>
//         );
//     }
// }

// export default Table;
