import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import { UndrawBrowserStats } from 'react-undraw-illustrations';


class DataSummary extends Component {
  render() {
    return (
      <div className="pt-3 pb-3">
         <div className="container col-lg-10">
            <h4 className="text-left">Inser figure in this block</h4>
            <br/>
            <div className="container d-flex justify-content-center px-5">
               
            <div className="col-lg-6">
                  <UndrawBrowserStats
                    primaryColor='#4285f4'
                    height= '150px'
                  />
            </div>  




            </div>
         </div>
      </div>
    );
  }
}

export default DataSummary;
