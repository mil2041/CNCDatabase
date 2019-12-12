import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
//import { UndrawChoose, UndrawChecklist, UndrawWorkChat } from 'react-undraw-illustrations';
import introduction_figure from './img/functional_loop.png';

class Intorduction extends Component {
  render() {
    return (
        <div className="pt-3 pb-3">
            <div className="container col-lg-10">
                
                


                <div className="row pt-3 pb-1 col-lg-10">
                    <h1 className="text-left"><strong> Introduction </strong></h1>
                    <p>   Most mutations from whole genome sequencing data occur in the non-coding region 
                          with unknown impact to the tumor development. Although the advances in the study 
                          of regulatory regions have been uncovering an unprecedented number of putative 
                          non-coding cancer drivers throughout genomes, and the trend lead to fast accumulation 
                          of data supporting these evidences. We applied text mining and expert knowledge to the 
                          PubMed articles and then developed CNCDatabase, 
                          Cornell Non-Coding Cancer driver Database. 
                          CNCDatabase provides a helpful resource for researchers to explore the 
                          pathological role of non-coding alterations and their associations with gene expression in human cancers.
                    </p>
                    
                   
                   

               </div>

               <div className="container d-flex justify-content-center px-5">
               
                

                 <img src={introduction_figure} alt="introduction" width="85%" height="85%"/>


               </div>


                


            </div>
        </div>
    );
  }
}

export default Intorduction;
