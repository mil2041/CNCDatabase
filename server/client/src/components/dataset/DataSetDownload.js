import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class DataSetDownload extends Component {
  render() {
    return (
      <div className="container">
        <h1>DataSetDownload</h1>
        <hr/>
        Cornell Non-coding database
      </div>
    );
  }
}

export default DataSetDownload;