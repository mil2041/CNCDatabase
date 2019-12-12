import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
//import { UndrawBrowserStats } from 'react-undraw-illustrations';
import summary_figure from '../img/figure2_v6.png';
//import HybridChart from './HybridChart';
import ChartApp from './ChartApp5';

class DataSummary extends Component {

  state = {
    dataset: [5, 6, 8, 10, 12, 14, 16, 18, 15, 11]
  }


  render() {
    return (
      <div className="pt-3 pb-3">
         <div className="container col-lg-10">
            <h4 className="text-left"><strong>Data Summary</strong></h4>
            <br/>
            <div className="container d-flex justify-content-center px-5">
               
                
            {/*
                <img src={summary_figure} alt="summary" width="85%" height="85%"/>
             */}

                  <ChartApp/>

            </div>
         </div>
      </div>
    );
  }
}

export default DataSummary;