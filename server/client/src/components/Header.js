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
          <ul className="navbar-nav">
            <li class="nav-item"><a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a></li>
            <li class="nav-item"><a className="nav-link" href="/search">Search</a></li>
            <li class="nav-item"><a className="nav-link" href="#">Download</a></li>
            <li class="nav-item"><a className="nav-link" href="#">Help</a></li>
            <li class="nav-item"><a className="nav-link" href="#">Contact</a></li>
          </ul>
          
         
         </div>
         <form class="form-inline">
         <button class="btn btn-sm btn-outline-primary" type="button">Login</button>
         </form>

      </nav>
    );
  }
}

export default Header;
