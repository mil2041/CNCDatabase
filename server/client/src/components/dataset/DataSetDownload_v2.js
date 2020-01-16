import React, { Component } from 'react';


class DataSetDownload extends Component {
  render() {
    return (
      <div className="container-fluid py-5 pl-5">
        <div className="row">
           <div className="col-lg-10">
              <h1><strong>Download</strong></h1>
              <hr className="style1"/>

              <div className="card">
                <div className="card-header">
                   <h5><strong>PostgreSQL database content</strong></h5>
                </div>
                <div className="card-body">
                    
                    <span className="mr-2">PostgreSQL database file: </span>
                    <a href="#">file</a>
                    <hr/>
                    <span className="mr-2">Database schema design file: </span>
                    <a href="#">file</a>
                </div>
               </div>







              

           </div> 
        </div>    
      </div>
    );
  }
}

export default DataSetDownload;