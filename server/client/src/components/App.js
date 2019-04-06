import React, { Component } from 'react';
import '../FontAwesome'
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';


import Header from './header/Header';
import Landing from './landing/Landing';
import Studies from './studies/Studies';
import Dashboard from './dashboard/Dashboard';
import Dashboard_test from './dashboard/Dashboard_test_v2';
import SearchNew from './searches/SearchNew';

import DataSetDownload from './dataset/DataSetDownload';
import Documentation from './faq/Documentation';
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
            <Route exact path="/search_test" component={Dashboard_test} />
            <Route exact path="/search/new" component={SearchNew} />
            <Route exact path="/dataset" component={DataSetDownload} />
            <Route exact path="/faq" component={Documentation} />
            <Route exact path="/about" component={About} />
            <Route exact path="/dataupdatefromuser" component={FileUpload} />
          </div>
        </BrowserRouter>

        <Footer />
      </div>
    );
  }
}

export default connect(null, actions)(App);
