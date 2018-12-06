import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import SearchBar from './searches/Search_bar';
//import TestTable from './tables/TestTable';
import TestTable2 from './tables/TestTable2';

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
        <div className="card mt-3">
          <div className="card-body">
            <SearchBar />
          </div>
        </div>

        <div className="card mt-3">
          <div className="card-body">
            <TestTable2 />
          </div>
        </div>

        <div className="card mt-3">
          <h5 className="card-header">Summary</h5>
          <div className="card-body">
            <InfoTable />
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Dashboard;
