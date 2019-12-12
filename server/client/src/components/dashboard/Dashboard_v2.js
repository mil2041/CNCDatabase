import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
//import SearchBar from '../searches/Search_bar';
//import QueryBarByGene from '../searches/Query_bar_by_gene';
//import QueryForm2 from '../searches/QueryForm_v3';
//import QueryForm from '../searches/QueryForm';

//import QueryForm from '../searches/QueryFormV7';

import QueryForm from '../searches/QueryFormikForm';
//import MyForm from '../searches/QueryHookFormTest_v2';

//import QueryHookForm from '../searches/QueryHookFormTest';

//import TestTable from './tables/TestTable';
//import TestTable2 from './tables/TestTable2';
//import CancerDriverListTable from '../tables/AntdTableContainer3';

//import InfoTable from './InfoTable';
//import CancerDriverListTable from '../tables/ReactBootstrapTable';

//import CancerDriverByGeneTable from '../tables/CancerDriverByGeneTable';

import CancerDriverListTable from '../tables/CancerDriverListTable';

//import CancerDriverListTable from '../tables/CancerDriverListTableMUI';

//import GeneSummary from './GeneSummary';
//import TabContent from './TabContent';
//import { Tabs, Tab } from 'react-bootstrap-tabs';
//import TestPlot from '../studies/TestPlot';
//import ExamplePlot from '../plot/barPlot';
import CancerDriverListPlot from '../plot/CancerDriverListPlot';
//import QueryBarByGene from '../searches/Query_bar_by_gene';

class Dashboard extends Component {
  render() {
    return (
      <div className="container col-12">
        <br/> 
        <h1><strong>Search cancer driver</strong></h1>
       
        {/* <!-- Nav tabs --> */}

        
                    <br />
                    <div className="card">
                    <h5 className="card-header"><strong>Search cancer driver list</strong></h5>
                    <div className="card-body">
                       <div className="col-lg-10">
                        
                          <QueryForm />
                        </div>
                    </div>
                    </div>
                    <br /> 



                    <div className="card mt-3">
                     <h5 className="card-header"><strong>Summary</strong> </h5>
                      <div className="card-body">
                        <div className="col-lg-12">
                          <CancerDriverListPlot />
                        </div> 
                      </div>
                    </div>
                    <br />





                    <div className="card mt-3">
                     <h5 className="card-header"><strong>Results</strong> </h5>
                      <div className="card-body">
                        <div className="col-lg-12">
                          <CancerDriverListTable />
                        </div> 
                      </div>
                    </div>
                    <br />
           
        
        
      </div>
    );
  }
}

export default Dashboard;
