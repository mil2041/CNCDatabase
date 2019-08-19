import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import { importMDX } from 'mdx.macro';

const Content = importMDX.sync('./dataset.md')


class DataSetDownload extends Component {
  render() {
    return (
      <div className="container col-lg-10 py-3">
        <h1>Download</h1>
        <hr/>
        <Content
        />
      </div>
    );
  }
}

export default DataSetDownload;