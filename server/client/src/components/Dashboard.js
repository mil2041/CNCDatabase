import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchBar from './searches/Search_bar';
import InfoTable from './InfoTable';

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h1>CNCDatabase</h1>
          Cornell Non-coding database
        </div>
        <br />
        <div class="card mt-3">
          <div class="card-body">
            <SearchBar />
          </div>
        </div>
        <div class="card mt-3">
          <h5 class="card-header">Summary</h5>
          <div class="card-body">
            <InfoTable />
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Dashboard;
