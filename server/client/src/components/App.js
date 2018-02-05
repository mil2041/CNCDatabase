import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SearchNew from './searches/SearchNew';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      //<div className="container">
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/search" component={Dashboard} />
            <Route exact path="/search/new" component={SearchNew} />
          </div>
        </BrowserRouter>

        <Footer />
      </div>
    );
  }
}

export default App;
