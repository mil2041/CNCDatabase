import React, { Component } from 'react';
import '../FontAwesome'
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';


import Header from './header/Header_v2';
import Landing from './landing/Landing';
import Studies from './studies/Studies';
//import Dashboard from './dashboard/Dashboard';
import Dashboard from './dashboard/Dashboard_v2';
//import SearchNew from './searches/SearchNew';

import DataSetDownload from './dataset/DataSetDownload';
import Documentation from './documentation/Documentation_v3';
import About from './about/About';

import Footer from './footer/Footer';

import Login from './Login';
//const DataUpdateFromUser = () => <h2>DataUpdateFromUser</h2>;
import FileUpload from './fileupload/FileUpload';

class App extends Component {

  componentDidMount() {
      this.props.fetchUser();
  } 


  render() {
    return (
      //<div className="container">
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/studies" component={Studies} />
            <Route exact path="/search" component={Dashboard} />
            <Route exact path="/dataset" component={DataSetDownload} />
            <Route exact path="/documentation" component={Documentation} />
            <Route exact path="/about" component={About} />
            <Route exact path="/submission" component={FileUpload} />
          </div>
        </BrowserRouter>

        <Footer />
      </div>
    );
  }
}

export default connect(null, actions)(App);
