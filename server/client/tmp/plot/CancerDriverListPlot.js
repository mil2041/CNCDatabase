import React from 'react';
//import 'react-tabulator/lib/styles.css';
//import 'react-tabulator/lib/css/bootstrap/tabulator_bootstrap4.min.css';
//import 'react-tabulator/lib/css/tabulator.min.css';
//import { ReactTabulator} from 'react-tabulator';
//import '../css/tabulator_setup.css';

//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCancerDriverList, fetchBygeneSymbol } from '../../actions';
//import { CSVLink } from 'react-csv';
import * as d3 from 'd3';
import Plot from 'react-plotly.js';

class CancerDriverListPlot extends React.Component {
     
    componentDidMount() {
        // action
        //this.props.dispatch(fetchCancerDriverList());
    }

    renderDataBygeneSmbol2(dataBygeneSymbol) {

        const data = dataBygeneSymbol

        console.log("plot data", data);
        console.log("plot data length", data.length) 
        
        const totalDataLength = data.length

        const numOfpublications = d3.map(data, function(d) {return d.pmid; }).keys().length
        console.log("unique papers", numOfpublications);

         //pmid, cancertype, gene, element, mutatedsamplesize, cohortsize, evidencetype, evidencemethod

        

        let test1 = [19, 31, 50];


        let data1 = [{
          x: ['publications'],
          y: [numOfpublications],
          width: [0.1],
          type: 'bar'
        }];
        
        console.log("data1:", data1);

        //const data1 = [trace1, trace2];
          
        const layout1 = {
            title: 'Publications',
            xaxis: {
                tickangle: -45,
                showgrid: true
                
            },
            yaxis: {
                title: 'Number of publications',
                showline: true
            },
            autosize: false,
            width: 500,
            height: 500,
            margin: {
              l: 50,
              r: 50,
              b: 100,
              t: 100,
              pad: 4
            },
            
            barmode: 'group',
            bargap: 0.15,
            bargroupgap: 0.1
          };

          const data2 = [{
            x: ['WDR74'],
            y: [8],
            width: [0.2],
            type: 'bar'
          }];
          
          //const data1 = [trace1, trace2];
            
            const layout2 = {
              title: 'Publication support per gene',
              xaxis: {
                  tickangle: -45
              },
              yaxis: {
                  title: 'Number of publications'
              },
              barmode: 'group',
              bargap: 0.15,
              bargroupgap: 0.1
            };

            const data3 = [{
                x: ['TERT','WDR74','PLEKHS1','CCDC107','AP003733.1'],
                y: [10,6,5,4,3],
                width: [0.4,0.4,0.4,0.4,0.4],
                type: 'bar'
              }];
              
              //const data1 = [trace1, trace2];
                
            const layout3 = {
                  title: 'Publication support per gene',
                  xaxis: {
                      tickangle: -45
                  },
                  yaxis: {
                      title: 'Number of publications'
                  },
                  barmode: 'group',
                  bargap: 0.15,
                  bargroupgap: 0.1
            };

            const data4 = [{
                x: ['TERT','WDR74','PLEKHS1','CCDC107','AP003733.1'],
                y: [10,6,5,4,3],
                width: [0.4,0.4,0.4,0.4,0.4],
                type: 'bar'
              }];
              
              //const data1 = [trace1, trace2];
                
            const layout4 = {
                  title: 'Publication support per gene',
                  xaxis: {
                      tickangle: -45
                  },
                  yaxis: {
                      title: 'Number of publications'
                  },
                  barmode: 'group',
                  bargap: 0.15,
                  bargroupgap: 0.1
            };



        return (
            <div className="container-fluid" style={{ marginTop: 20 }}>

              <div className="d-flex flex-row">
               <Plot
                   data={data1}
                   layout={layout1} 
               />
              </div>

              



            </div>

        );

    }    

    render (){
      
        return(
            <div>{ this.renderDataBygeneSmbol2(this.props.dataBygeneSymbol) }</div>
        );


    }

}

//export default ReactBootstrapTable;


const mapStateToProps = ( state ) => {
    return { dataBygeneSymbol: state.dataCancerDriverList };
}
  
export default connect(mapStateToProps, { fetchCancerDriverList })(CancerDriverListPlot);

//export default ReactTabulatorTable;