import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
//import { UndrawBrowserStats } from 'react-undraw-illustrations';
import SummaryPlot from './DataSummary/SummaryPlot';

class DataSummary extends Component {
  render() {
    return (
      <div className="pt-3 pb-3">
         <div className="container col-lg-10">
            <h3 className="text-left"><strong>Data summary</strong></h3>
            <br/>
            <div className="container d-flex justify-content-center px-5">
               
                

                <SummaryPlot/>


            </div>
         </div>
      </div>
    );
  }
}

export default DataSummary;
