import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
//import SearchBar from '../searches/Search_bar';
//import QueryBarByGene from '../searches/Query_bar_by_gene';
//import QueryForm2 from '../searches/QueryForm_v3';
//import QueryForm from '../searches/QueryForm';
import QueryForm from '../searches/QueryFormV7';

import MyForm from '../searches/QueryFormTest';

//import TestTable from './tables/TestTable';
//import TestTable2 from './tables/TestTable2';
//import AndTableContainer3 from './tables/AntdTableContainer3';

//import InfoTable from './InfoTable';
//import ReactBootstrapTable from './tables/ReactBootstrapTable';
import CancerDriverByGeneTable from '../tables/CancerDriverByGeneTable';
import CancerDriverListTable from '../tables/CancerDriverListTable';

import GeneSummary from './GeneSummary';
//import TabContent from './TabContent';
//import { Tabs, Tab } from 'react-bootstrap-tabs';
//import TestPlot from '../studies/TestPlot';
import ExamplePlot from '../plot/barPlot';
import QueryBarByGene from '../searches/Query_bar_by_gene';

class Dashboard extends Component {
  render() {
    return (
      <div className="container col-10">
        <br/> 
        <h1>Search cancer driver</h1>
        <br/>
        {/* <!-- Nav tabs --> */}

        
                    <br />
                    <div className="card">
                    <h5 className="card-header">Search cancer driver list</h5>
                    <div className="card-body">
                       <div className="col-lg-6">
                        
                        <QueryForm />
                        </div>
                    </div>
                    </div>
                    <br /> 
                    
                    <div className="card mt-3">
                    <h5 className="card-header">Query form test</h5>
                    <div className="card-body">
                        <MyForm />
                    </div>
                    </div>
                    <br />

                    <div className="card mt-3">
                    <h5 className="card-header">Gene overview (provided by HGNC)</h5>
                    <div className="card-body">
                        <GeneSummary />
                    </div>
                    </div>
                    <br />

                    <div className="card mt-3">
                    <h5 className="card-header">Graphical Summary</h5>
                    <div className="card-body">
                        
                        <ExamplePlot />
                    </div>
                    </div>
                    <br />


                    <div className="card mt-3">
                    <h5 className="card-header">Search Results</h5>
                    <div className="card-body">
                        <CancerDriverListTable />
                    </div>
                    </div>
                    <br />
           
        
        
      </div>
    );
  }
}

export default Dashboard;
