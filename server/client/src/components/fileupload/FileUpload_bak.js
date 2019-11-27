import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FileUpload.css';
import Dropzone from './Dropzone';
import Progress from './Progress';

// use the solution from here. 
//https://malcoded.com/posts/react-file-upload/

class FileUpload extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          files: [],
          uploading: false,
          uploadProgress: {},
          successfullUploaded: false
        };
    
        this.onFilesAdded = this.onFilesAdded.bind(this);
        this.uploadFiles = this.uploadFiles.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
        this.renderActions = this.renderActions.bind(this);
    }
    
    onFilesAdded(files) {
        this.setState(prevState => ({
            files: prevState.files.concat(files)
        }));
    }
    
    async uploadFiles() {
        this.setState({ uploadProgress: {}, uploading: true });
        const promises = [];
        this.state.files.forEach(file => {
            promises.push(this.sendRequest(file));
        });
        try {
            await Promise.all(promises);

            this.setState({ successfullUploaded: true, uploading: false });
        } catch (e) {
            // Not Production ready! Do some error handling here instead...
            this.setState({ successfullUploaded: true, uploading: false });
        }
    }
    
      sendRequest(file) {
        return new Promise((resolve, reject) => {
          const req = new XMLHttpRequest();
    
          req.upload.addEventListener("progress", event => {
            if (event.lengthComputable) {
              const copy = { ...this.state.uploadProgress };
              copy[file.name] = {
                state: "pending",
                percentage: (event.loaded / event.total) * 100
              };
              this.setState({ uploadProgress: copy });
            }
          });
    
          req.upload.addEventListener("load", event => {
            const copy = { ...this.state.uploadProgress };
            copy[file.name] = { state: "done", percentage: 100 };
            this.setState({ uploadProgress: copy });
            resolve(req.response);
          });
    
          req.upload.addEventListener("error", event => {
            const copy = { ...this.state.uploadProgress };
            copy[file.name] = { state: "error", percentage: 0 };
            this.setState({ uploadProgress: copy });
            reject(req.response);
          });
    
          const formData = new FormData();
          formData.append("file", file, file.name);
    
          req.open("POST", "http://localhost:5200/upload");
          req.send(formData);
        });
      }
    
      renderProgress(file) {
        const uploadProgress = this.state.uploadProgress[file.name];
        if (this.state.uploading || this.state.successfullUploaded) {
          return (
            <div className="ProgressWrapper">
              <Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
              {/*<img
                className="CheckIcon"
                alt="done"
                src="baseline-check_circle_outline-24px.svg"
                style={{
                  opacity:
                    uploadProgress && uploadProgress.state === "done" ? 0.5 : 0
                }}
              />*/}  
              <FontAwesomeIcon icon={["fas","check-circle"]} color="black" size="1x" className="mr-2"
                                style={{
                                  opacity:
                                    uploadProgress && uploadProgress.state === "done" ? 0.5 : 0
                                }}
              
              
              
              /> 


              
            </div>
          );
        }
      }
    
      renderActions() {
        if (this.state.successfullUploaded) {
          return (
            <button className="btn-primary"
              onClick={() =>
                this.setState({ files: [], successfullUploaded: false })
              }
            >
              Clear
            </button>
          );
        } else {
          return (
            <button className="btn-primary"
              disabled={this.state.files.length < 0 || this.state.uploading}
              onClick={this.uploadFiles}
            >
              Upload
            </button>
          );
        }
      }



  render() {
    return (


      <div >
        <div className="container col-lg-6 py-3">
              <div className="card mt-3">
                    <h5 className="card-header">File upload</h5>
                    <div className="card-body">
                    <div className="Upload">
                            <span className="Title">Upload Files</span>
                            <div className="Content">
                            <div>
                                <Dropzone
                                onFilesAdded={this.onFilesAdded}
                                disabled={this.state.uploading || this.state.successfullUploaded}
                                />
                            </div>
                            <div className="Files">
                                {this.state.files.map(file => {
                                return (
                                    <div key={file.name} className="Row">
                                    <span className="Filename">{file.name}</span>
                                    {this.renderProgress(file)}
                                    </div>
                                );
                                })}
                            </div>
                            </div>
                            <div className="Actions">{this.renderActions()}</div>
                    </div>






                    </div>
             </div>
              <br />

        </div>
      </div>
    );
  }
}

export default FileUpload;
