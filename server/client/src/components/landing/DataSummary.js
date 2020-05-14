import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
//import { UndrawBrowserStats } from 'react-undraw-illustrations';
//import SummaryPlot from './DataSummary/SummaryPlot';
//import SummaryPiePlot from './DataSummary/SummaryPiePlot';
import dataSummary_figure from './img/web_figure2_0331_2020.png';


class DataSummary extends Component {
  render() {
    return (
      <div className="container-fluid">
                
      <div className="row">  


         <div className="col-lg-10 pt-3 pb-3 pl-5">
            <h1 className="text-left"><strong> Data Summary </strong></h1>
            
            <hr className="style1"/>

            <p> Summary of non-coding drivers.
               (A) Number of non-coding drivers in each cancer type by computational prediction.
               (B) Number of non-coding drivers in each cancer type that show differential gene expression in samples with mutations vs. without using RNA-seq data. 
               (C) Number of non-coding drivers in each cancer type with support from other functional validation, such as CRISPR/Cas9 or luciferase reporter assay.  
            </p>
            
           
           

         </div>

         <div className="container d-flex px-1 pt-1 pb-5">
       
        
            <center>
             <img src={dataSummary_figure} alt="dataSummary" width="80%" height="100%"/>
            </center>

         </div>


      </div>  


    </div>
    );
  }
}

export default DataSummary;
