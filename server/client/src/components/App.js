import React, { Component } from 'react';
import '../FontAwesome'
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';


import Header from './header/Header';
import Landing from './Landing';
import Studies from './studies/Studies';
import Dashboard from './dashboard/Dashboard';
import SearchNew from './searches/SearchNew';

import DataSetDownload from './dataset/DataSetDownload';
import Documentation from './help/Documentation';
import About from './about/About';

import Footer from './Footer';

import Login from './Login';
const DataUpdateFromUser = () => <h2>DataUpdateFromUser</h2>;


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
            <Route exact path="/search/new" component={SearchNew} />
            <Route exact path="/dataset" component={DataSetDownload} />
            <Route exact path="/help" component={Documentation} />
            <Route exact path="/about" component={About} />
            <Route exact path="/dataupdatefromuser" component={DataUpdateFromUser} />
          </div>
        </BrowserRouter>

        <Footer />
      </div>
    );
  }
}

export default connect(null, actions)(App);
