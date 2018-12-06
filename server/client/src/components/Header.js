import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';

//# Home, Search, Download, Help, Contact

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          CNCDatabase
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="/search">
              Search
            </a>
            <a className="nav-item nav-link" href="#">
              Download
            </a>
            <a className="nav-item nav-link" href="#">
              Help
            </a>
            <a className="nav-item nav-link" href="#">
              Contact
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
