import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>CNCDatabase</h1>
        Cornell Non-coding database
      </div>
    );
  }
}

export default Landing;
