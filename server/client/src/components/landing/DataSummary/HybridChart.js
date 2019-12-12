import React, { Component } from "react"
import * as d3 from "d3"
import Bar from "./Bar"
import Text from "./Text"

class HybridChart extends Component {
  constructor() {
    super()
    this.createAttributes = this.createAttributes.bind(this)

    this.totalW = 600
    this.totalH = 300
    this.margin = {
      top: 5,
      bottom: 5,
      left: 5,
      right: 5
    }
    this.w = this.totalW - this.margin.left - this.margin.right
    this.h = this.totalH - this.margin.top - this.margin.bottom

  }

  componentDidMount() {
    this.createAttributes()
  }

  createAttributes() {
    // Dimensions
    const { totalW, totalH, margin } = this

    // Add SVG attributes
    d3.select(this.svg)
      .attr("id", "bar-svg")
      .attr("width", totalW)
      .attr("height", totalH)

    // Add G attributes
    d3.select(this.g)
      .attr("id", "bar-g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`)
  }

  render() {
    // Data
    //const { dataset } = this.props
    //const { dataset } = this.state
     const { dataset } = {
        dataset: [5, 6, 8, 10, 12, 14, 16, 18, 15, 11]
     } 

    // Dimensions
    const { w, h } = this

    // Scales
    const xScale = d3
      .scaleBand()
      .domain(d3.range(10))
      .rangeRound([0, w])
      .paddingInner(0.05)
    const yScale = d3
      .scaleLinear()
      .domain([0, 50])
      .range([h, 0])

    return (
      <svg className="d-block mx-auto" ref={el => (this.svg = el)}>
        <g ref={el => (this.g = el)}>
          {dataset.map((d, i) => (
            <Bar
              data={d}
              i={i}
              height={h}
              xScale={xScale}
              yScale={yScale}
              key={`${i}-bar`}
            />
          ))}
          {dataset.map((d, i) => (
            <Text
              data={d}
              i={i}
              xScale={xScale}
              yScale={yScale}
              key={`${i}-text`}
            />
          ))}
        </g>
      </svg>
    )
  }
}

export default HybridChart