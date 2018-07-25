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
          maplink: ''
        };
    
  

    this.handleOrganization = this.handleOrganization.bind(this);
    this.handleServices = this.handleServices.bind(this);
    this.handleWebsite = this.handleWebsite.bind(this);
    this.handleHours = this.handleHours.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleMapLink = this.handleMapLink.bind(this);


    this.addCenter = this.addCenter.bind(this);
    this.handleClickNewData = this.handleClickNewData.bind(this);

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

    
    addCenter(organization, services, website, hours, phone, maplink) {
      axios.post("/api/userData", {organization, services, website, hours, phone, maplink}).then(res =>
        console.log(res))
        // this.setState({ 
        //   homeListings: res.data });
    }


    handleClickNewData(){
    let {organization, services, website, hours, phone, maplink} = this.state;
    this.addCenter(organization, services, website, hours, phone, maplink);
    this.setState = {
        organization: '',
        services: '',
        website: '',
        hours: '',
        phone: 0,
        maplink: ''
      }
    }


    render() {
    //   let { organization, services, website, hours, phone, maplink} = this.state;
        return (
          <div>
            <h2 className='title'></h2>
            <div className='sub_box'>
            Add or Update Info
            <hr/>
            <Link to='/user'>
            <button className="CancelButton">Cancel</button>
            </Link>

            <Link to={'/user'}>
          <button className="Add_Info" onClick={this.handleClickNewData}>
            Complete
          </button>
        </Link>
    
          <hr/>
          <div className="input fields">
            <input className='inputName' placeholder="Organization" onChange={(event) => this.handleOrganization (event.target.value)}/>
            <hr/>
            <input className='inputServices' placeholder="Services Offered" onChange={(event) => this.handleServices(event.target.value)}/>
            <hr/>
            <input className='inputWebsite' placeholder="Website" onChange={(event) => this.handleWebsite (event.target.value)}/>
            <hr/>
            <input className='inputHours' placeholder="Hours" onChange={(event) => this.handleHours (event.target.value)}/>
            <hr/>
            <input className='inputPhone' placeholder="Phone" onChange={(event) => this.handlePhone (event.target.value)}/>

            <input className='inputMap' placeholder="Maplink" onChange={(event) => this.handleMapLink (event.target.value)}/>
            <hr/>
            </div>
          
            {/* <button onClick={() => axios.put("/api/editdata", reqbody)}>
          this button updates the db
        </button> */}

        </div>
    </div>
            )
        }
    }