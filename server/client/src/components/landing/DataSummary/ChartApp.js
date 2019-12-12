import React, { Component } from "react";
import * as d3 from "d3";
import ScatterPlot from './ScatterPlot';


import weatherdata from "./my_weather_data.json";

const temperatureAccessor = d => d.temperatureHigh
const humidityAccessor = d => d.humidity

console.log("weatherdata",weatherdata)

class ChartApp extends Component {
  
    
    
    state = {
      dataset: [
         {temperature: 10, humidity: 120},
         {temperature: 20, humidity: 230},
         {temperature: 30, humidity: 25},
         {temperature: 40, humidity: 23},
         {temperature: 15, humidity: 22},
         {temperature: 14, humidity: 21},
       ]
    }
    

    

    render() {

      console.log("Data",weatherdata);


      return (
        <div>
          <h5>Hi</h5>
          <ScatterPlot
            data={this.state.dataset}
            xAccessor={humidityAccessor}
            yAccessor={temperatureAccessor}
            xLabel="Humidity"
            yLabel="Temperature"
          />
        </div>
      );  

    }

}

export default ChartApp