import React, { Component } from 'react';
import {Link} from 'react-router-dom';
const axios = require ('axios');


export default class UpdateUser extends Component {
    constructor(){
      super()
        this.state = {
          organization: '',
          services: '',
          website: '',
          hours: '',
          phone: 0,
          maplink: '',
          userid: 0
        };
    
  

    this.handleOrganization = this.handleOrganization.bind(this);
    this.handleServices = this.handleServices.bind(this);
    this.handleWebsite = this.handleWebsite.bind(this);
    this.handleHours = this.handleHours.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleMapLink = this.handleMapLink.bind(this);
    this.handleId = this.handleId.bind(this);


    this.addCenter = this.addCenter.bind(this);
    this.handleClickNewData = this.handleClickNewData.bind(this);

    // this.deleteUserData = this.deleteUserData.bind(this);

  }

    handleOrganization(organization){
      this.setState({organization: organization});
    }

    handleServices(services){
      this.setState({services: services})
    }

    handleWebsite(website){
      this.setState({website: website})
    }

    handleHours(hours){
      this.setState({hours: hours})
    }

    handlePhone(phone){
      this.setState({phone: phone})
    }

    handleMapLink(maplink){
        this.setState({maplink: maplink})
      }

      handleId(userid){
        this.setState({userid: userid})
      }

    // Get the currents users id
    // send the userid with request and update on db
    addCenter(organization, services, website, hours, phone, maplink, userid) {
      axios.post("/api/userData", {organization, services, website, hours, phone, maplink, userid}).then(res =>
        this.props.getMyData(this.props.userId)).catch(err => console.log(err))
        // this.setState({ 
        //   homeListings: res.data });
    }


    handleClickNewData(){
    let {organization, services, website, hours, phone, maplink, userid} = this.state;
    this.addCenter(organization, services, website, hours, phone, maplink, userid);
    this.setState = {
        organization: '',
        services: '',
        website: '',
        hours: '',
        phone: 0,
        maplink: '',
        userid: 0
      }
    }

    // deleteUserData(id) {
    //   axios.delete(`/api/userData/${ id }`).then( res =>{ 
    //     this.getMyData();
    // });
    // }


    render() {
    //   let { organization, services, website, hours, phone, maplink} = this.state;
        return (
          <div>
            {/* <h2 className='title'>Update it</h2> */}
            <div className='sub_box'>
            Add or Update Info
            <hr/>
            <Link to='/user/'>
            <button className="button" >Cancel</button>
            </Link>

            <Link to={'/user'}>
          <button className="button" onClick={this.handleClickNewData}>
            Complete
          </button>
        </Link>

        
    
    
          <hr/>
          <div className="inputFields">
            <input className='inputName' placeholder="Organization" onChange={(event) => this.handleOrganization (event.target.value)}/>
            
            <input className='inputServices' placeholder="Services Offered" onChange={(event) => this.handleServices(event.target.value)}/>
            
            <input className='inputWebsite' placeholder="Website" onChange={(event) => this.handleWebsite (event.target.value)}/>
           
            <input className='inputHours' placeholder="Hours" onChange={(event) => this.handleHours (event.target.value)}/>
           
            <input className='inputPhone' placeholder="Phone" onChange={(event) => this.handlePhone (event.target.value)}/>
            
            <input className='inputMap' placeholder="Maplink" onChange={(event) => this.handleMapLink (event.target.value)}/>
            
             <input className='inputId' placeholder="User Id" onChange={(event) => this.handleId(event.target.value)}/>
            </div>
          
       

        </div>
    </div>
            )
        }
    }