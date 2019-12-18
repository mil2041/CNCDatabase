import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
        <div className="container-fluid py-3 pl-5">
          <div className="row">
            <div className="col-md-4 item">
              <h5>Cornell Non-Coding cancer driver Database</h5>
              <p>Please cite ABCDEFDRC.</p>
              
            </div>

            <div className="col-md-4 item">
              <h5>Features</h5>

            </div>

            <div className="col-md-4 item align-bottom">
              <h5>Contact</h5>
              <p><a href="https://khuranalab.med.cornell.edu/">Khurana Lab</a></p>
              <p>Meyer Cancer Center, Weill Cornell Medicine, New York, New York 10065, USA</p>
              <p>Caryl and Israel Englander Institute for Precision Medicine, New York Presbyterian Hospital-Weill Cornell Medicine, New York, New York 10065, USA</p>

            </div>




          </div>

         <div className="row">
           <div className="col-lg-12">
              <p className="copyright">
                © 2018 - 2020, Weill Cornell Medicine. All Rights Reserved
              </p>
           </div> 
         </div> 


          

        </div>

    );
  }
}

export default Footer;
