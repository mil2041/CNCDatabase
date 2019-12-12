import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
//import { UndrawChoose, UndrawChecklist, UndrawWorkChat } from 'react-undraw-illustrations';


class Features extends Component {
  render() {
    return (
        <div className="pt-3 pb-3 bg-light">
            <div className="container col-lg-10">
                
                


                <div className="row pt-4 pb-4 col-lg-10">
                    <h1 className="text-left"><strong> Features </strong></h1>
                     <ul>
                        <li>
                           <p> Query non-coding cancer drivers evidences by gene name, element type, cancer type or evidence type.</p>
                        </li>

                        <li>
                           <p> Illustrate the query results in summary plots.</p>
                        </li>

                        <li>
                           <p> Prioritize non-coding cancer driver candidates for follow-up experiments. </p>
                        </li>



                     </ul>
                   

               </div>




                


            </div>
        </div>
    );
  }
}

export default Features;
