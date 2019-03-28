import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import SearchBar from '../searches/Search_bar';
//import TestTable from './tables/TestTable';
//import TestTable2 from './tables/TestTable2';
//import AndTableContainer3 from './tables/AntdTableContainer3';

//import InfoTable from './InfoTable';
//import ReactBootstrapTable from './tables/ReactBootstrapTable';
//import CancerDriverByGeneTable from '../tables/CancerDriverByGeneTable';
//import GeneSummary from './GeneSummary';
import TabContent from './TabContent';


class Dashboard_test extends Component {
  render() {
    return (
      <div className="container col-10">
        <h2>Toggleable Tabs</h2>
        
        {/* <!-- Nav tabs --> */}

        <TabContent />
        
        
      </div>
    );
  }
}

export default Dashboard_test;
