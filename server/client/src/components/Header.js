import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//# Home, Search, Download, Help, Contact

class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          CNCDatabase
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link" href="/search">
              Search
            </a>
            <a class="nav-item nav-link" href="#">
              Download
            </a>
            <a class="nav-item nav-link" href="#">
              Help
            </a>
            <a class="nav-item nav-link" href="#">
              Contact
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
