import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';
import '../../Assets/css/default.min.css';


export default class UserTable extends Component {
    constructor(props){
      super(props)

      this.state = {
        myData: [],
        input: ''
      };

    //   this.getUser = this.getUser.bind(this);
      this.getMyData = this.getMyData.bind(this);
      this.handleInput = this.handleInput.bind(this);
    //   this.deleteHome = this.deleteHome.bind(this);
    }

    componentDidMount() {
      this.getMyData();
    }
    
    getMyData() {
        axios.get("http://localhost:4000/api/userData").then(res => {
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
