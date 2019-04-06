import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import { UndrawChoose, UndrawChecklist, UndrawWorkChat } from 'react-undraw-illustrations';


class Features extends Component {
  render() {
    return (
        <div className="pt-3 pb-3">
            <div className="container col-lg-10">
                
                


                <div className="py-5">
                    <h4 className="text-left"> Why we look at non-coding regions in cancer? </h4>
                    <p>Mutated non-coding regions also have ability to regulate gene expression and promoter cancer progression.</p>
                    
                   
                   

               </div>




                <div className="row">
                    <div className="col-lg-6">
                            <UndrawChoose
                                primaryColor='#6c68fb'
                                height= '250px'
                            />
                    </div> 
                    <div className="col-lg-6 text-left">
                        <h5> TERT promoter </h5>
                        <hr/>
                        <p>  CNCDatabase aims to collect non-coding cancer driver lists
                            from public publications and to complement the understanding beyond
                            protein coding region in the genome.   
                            
                        </p>
                        <button type="submit" className="btn btn-primary btn-sg">
                        Learn more
                        </button>

                    </div>
                </div>

                

                <div className="row pt-5 pb-5 bg-light">
                    <div className="col-lg-6 text-left">
                        <h5> ESR1 enhancer </h5>
                        <hr/>
                        <p>  CNCDatabase aims to collect non-coding cancer driver lists
                            from public publications and to complement the understanding beyond
                            protein coding region in the genome.   
                            
                        </p>
                        <button type="submit" className="btn btn-primary btn-sg">
                        Learn more
                        </button>
                    </div>
                    
                    <div className="col-lg-6">
                            <UndrawChecklist
                                primaryColor='#6c68fb'
                                height= '250px'
                            />
                    </div>    

                </div>

                <div className="row pb-5">
                    <div className="col-lg-6">
                        <UndrawWorkChat
                          primaryColor='#6c68fb'
                          height= '250px'
                        />
                    </div> 
                    <div className="col-lg-6 text-left">
                        <h5> FOXA1 promoter </h5>
                        <hr/>
                        <p>  CNCDatabase aims to collect non-coding cancer driver lists
                            from public publications and to complement the understanding beyond
                            protein coding region in the genome.   
                            
                        </p>
                        <button type="submit" className="btn btn-primary btn-sg">
                        Learn more
                        </button>

                    </div>
                </div>


            </div>
        </div>
    );
  }
}

export default Features;
