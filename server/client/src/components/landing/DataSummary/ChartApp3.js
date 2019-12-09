import React, { Component } from "react";

// component and styles
import BillboardChart from "react-billboardjs";
import "react-billboardjs/lib/billboard.css";

const CHART_DATA = {
    columns: [
        ["x","John","A","B","C","D","E"],
        ["data1", 30, 200, 100, 400, 150, 250],
        ["data2", 130, 100, 140, 200, 150, 50]
        ],
    type: "bar",
    groups: [
        [
            "data1",
            "data2"
        ]
    ]

};

class LineChart extends Component {
  render() {
    return ( 
             <BillboardChart 
                  data={CHART_DATA}
                  legend = {{ position: "right" } }
                  axis = {{x: {type: "category"}}}
             /> 
    );
  }
}

export default LineChart;