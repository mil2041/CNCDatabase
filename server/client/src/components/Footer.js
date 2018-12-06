import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6 item text">
              <h5>Cornell Non-Coding Database</h5>
              <p>Please cite ABCDEFDRC.</p>
            </div>

            <div className="col-sm-6 col-md-3 item">
              <h5>Contact</h5>
              <ul>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
              </ul>
            </div>
          </div>

          <p className="copyright">
            © 2018, Weill Cornell Medicine. All Rights Reserved
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
