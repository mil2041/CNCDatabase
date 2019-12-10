import React from 'react';


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
        console.log("plot data element", data.map(d => d.element)) 
        const totalDataLength = data.length

        const numOfpublications = d3.map(data, function(d) {return d.pmid; }).keys().length
        console.log("unique papers", numOfpublications);

         //pmid, cancertype, gene, element, mutatedsamplesize, cohortsize, evidencetype, evidencemethod

        
        let dataArrayCancerType = data.map(d => d.cancertype) || 1;
        let dataArrayElement = data.map(d => d.element) || 1;
        let dataArrayEvidenceType = data.map(d => d.evidencetype) || 1;
        let dataArrayEvidenceMethod = data.map(d => d.evidencemethod) || 1;

        function count(arr) {
            return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
          }
        
        let countsCancerType = count(dataArrayCancerType); 
        let countsElement = count(dataArrayElement); 
        let countsEvidenceType = count(dataArrayEvidenceType); 
        let countsEvidenceMethod = count(dataArrayEvidenceMethod); 


        let countsCancerTypeKeys = Object.keys(countsCancerType);  
        let countsCancerTypeValues = Object.values(countsCancerType);


        let countsElementKeys = Object.keys(countsElement);  
        let countsElementValues = Object.values(countsElement);

        let countsEvidenceTypeKeys = Object.keys(countsEvidenceType);  
        let countsEvidenceTypeValues = Object.values(countsEvidenceType);

        let countsEvidenceMethodKeys = Object.keys(countsEvidenceMethod);  
        let countsEvidenceMethodValues = Object.values(countsEvidenceMethod);

        //console.log("element counts", count(arr));        
        
        //console.log("element counts key", c1);
        //console.log("element counts value", c2); 
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


            //const elementTypePie = [16, 15, 12, 6, 5, 4, 50];
            //const elementTypePieLabel = ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ];

            const elementTypePie = c2;
            const elementTypePieLabel = c1;

            const dataPie = [{
                type: "pie",
                hole: .4,
                values: elementTypePie,
                labels: elementTypePieLabel,
                domain: {column: 0},
                name: 'Element Type',
                textinfo: "label+value",
                textposition: "outside",
                hoverinfo: 'label+percent',
                automargin: true
              }];

            const layoutPie = {
                title: 'Element Type',
                height: 400,
                width: 400,
                showlegend: false
              };






        return (
            <div className="container-fluid" style={{ marginTop: 20 }}>

              <div className="d-flex flex-row">
               <Plot
                   data={data1}
                   layout={layout1} 
               />
             

              
               <Plot
                   data={dataPie}
                   layout={layoutPie} 
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