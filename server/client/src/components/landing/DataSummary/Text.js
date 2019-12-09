import React, { Component } from "react"
import * as d3 from "d3"

class Text extends Component {
  constructor() {
    super()
    this.createAttributes = this.createAttributes.bind(this)
    this.updateAttributes = this.updateAttributes.bind(this)
  }

  componentDidMount() {
    const { data } = this.props

    d3.select(this.text)
      .datum(data)
      .call(this.createAttributes)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      d3.select(this.text)
        .datum(this.props.data)
        .call(this.updateAttributes)
    }
  }

  createAttributes(selection) {
    const { xScale, yScale, i } = this.props

    selection
      .attr("x", d => xScale(i) + xScale.bandwidth() / 2)
      .attr("y", d => yScale(d) + 15)
      .attr("font-size", "11px")
      .attr("fill", "white")
      .attr("text-anchor", "middle")
  }

  updateAttributes(selection) {
    const { yScale, i } = this.props

    selection
      .transition()
      .duration(500)
      .delay(d => (i / 10) * 1000)
      .attr("y", d => yScale(d) + 15)
  }

  render() {
    const { data } = this.props

    return <text ref={el => (this.text = el)}>{data}</text>
  }
}

export default Text