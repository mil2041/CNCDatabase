import React, { Component } from "react"
import * as d3 from "d3"

class Bar extends Component {
  constructor() {
    super()
    this.createAttributes = this.createAttributes.bind(this)
    this.updateAttributes = this.updateAttributes.bind(this)
  }

  componentDidMount() {
    const { data } = this.props

    d3.select(this.rect)
      .datum(data)
      .call(this.createAttributes)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      d3.select(this.rect)
        .datum(this.props.data)
        .call(this.updateAttributes)
    }
  }

  createAttributes(selection) {
    const { xScale, yScale, i, height } = this.props

    selection
      .attr("x", d => xScale(i))
      .attr("y", d => yScale(d))
      .attr("width", xScale.bandwidth())
      .attr("height", d => height - yScale(d))
      .attr("fill", d => `rgb(150, 0, ${d * 5})`)
      .attr("rx", 3)
  }

  updateAttributes(selection) {
    const { yScale, height, i } = this.props

    selection
      .transition()
      .duration(500)
			.delay(d => (i / 10) * 1000)
      .attr("y", d => yScale(d))
      .attr("height", d => height - yScale(d))
      .attr("fill", d => `rgb(150, 0, ${d * 5})`)
  }

  render() {
    return <rect ref={el => (this.rect = el)} />
  }
}

export default Bar