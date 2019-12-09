import React, { Component } from "react";
import * as d3 from "d3";

//import "./Chart/Chart.css";

class ChartApp2 extends Component {
  
    constructor() {
        super()
        this.state = { forceUpdate: false }
        this.drawChart = this.drawChart.bind(this)

      }
    
      componentDidMount() {
        this.drawChart()
      }
    
      drawChart() {
        const { dataset } = { dataset: [
            {temperature: 10, humidity: 120},
            {temperature: 20, humidity: 230},
            {temperature: 30, humidity: 25},
            {temperature: 400, humidity: 23},
            {temperature: 15, humidity: 22},
            {temperature: 140, humidity: 21},
          ]
        }

          
          //const { dataset } = {
          // dataset: [5, 6, 8, 10, 12, 14, 16, 18, 15, 11]
          //}

          const xAccessor = d => d.humidity
          const yAccessor = d => d.temperature 

          // 2. Create chart dimensions
          let dimensions = {
            width: 600,
            height: 300,
            margin: {
              top: 10,
              right: 10,
              bottom: 50,
              left: 50,
            },
          }
          
          dimensions.boundedWidth = dimensions.width
            - dimensions.margin.left
            - dimensions.margin.right
          dimensions.boundedHeight = dimensions.height
            - dimensions.margin.top
            - dimensions.margin.bottom
    
          // 3. Draw canvas
          const svg = d3.select(this.svg)
            .attr("id", "bar-svg")
            .attr("width", dimensions.width)
            .attr("height", dimensions.height)
    
          const bounds = svg.append("g")
            .attr("transform", `translate(${dimensions.margin.left}, ${dimensions.margin.top})`)
            .attr("id", "bar-g")
    

          // 4. Create scales
          const xScale = d3.scaleLinear()
            .domain(d3.extent(dataset, xAccessor))
            .range([0, dimensions.boundedWidth])
            .nice()

          const yScale = d3.scaleLinear()
            .domain(d3.extent(dataset, yAccessor))
            .range([dimensions.boundedHeight, 0])
            .nice()


          // 5. Draw data
          const dots = bounds.selectAll("circle")
            .data(dataset, d => d[0])
            
          const newDots = dots.enter().append("circle")

          const allDots = newDots.merge(dots)
            .attr("cx", d => xScale(xAccessor(d)))
            .attr("cy", d => yScale(yAccessor(d)))
            .attr("r", 4)

          const oldDots = dots.exit()
             .remove()
    
          // 6. Draw peripherals

            const xAxisGenerator = d3.axisBottom()
            .scale(xScale)

            const xAxis = bounds.append("g")
            .call(xAxisGenerator)
                .style("transform", `translateY(${dimensions.boundedHeight}px)`)

            const xAxisLabel = xAxis.append("text")
                .attr("x", dimensions.boundedWidth / 2)
                .attr("y", dimensions.margin.bottom - 10)
                .attr("fill", "black")
                .style("font-size", "1.4em")
                .html("Dew point (&deg;F)")

            const yAxisGenerator = d3.axisLeft()
            .scale(yScale)
            

            const yAxis = bounds.append("g")
                .call(yAxisGenerator)

            const yAxisLabel = yAxis.append("text")
                .attr("x", -dimensions.boundedHeight / 2)
                .attr("y", -dimensions.margin.left + 10)
                .attr("fill", "black")
                .style("font-size", "1.4em")
                .text("Relative humidity")
                .style("transform", "rotate(-90deg)")
                .style("text-anchor", "middle")

            bounds.selectAll("circle")
                .on("mouseenter", onMouseEnter)
                .on("mouseleave",onMouseLeave)


            const tooltip = d3.select(this.svg)
                 .append("div")
                 .style("opacity", 0)
                 .attr("class", "tooltip")
                 .style("background-color", "yellow")
                 .style("border", "solid")
                 .style("border-width", "2px")
                 .style("border-radius", "5px")
                 .style("padding", "5px")



            function onMouseEnter(datum) {
                const dayDot = bounds.append("circle")
                    .attr("class", "tooltipDot")
                    .attr("cx", xScale(xAccessor(datum)))
                    .attr("cy", yScale(yAccessor(datum)))
                    .attr("r", 7)
                    .style("fill", "maroon")
                    .style("pointer-events", "none")
               
                tooltip.html("test text")
            
            
                const x = xScale(xAccessor(datum))
                + dimensions.margin.left
                const y = yScale(yAccessor(datum))
                + dimensions.margin.top
            
                tooltip.style("transform", `translate(`
                + `calc( -50% + ${x}px),`
                + `calc(-100% + ${y}px)`
                + `)`)
            
                tooltip.style("opacity", 1)
            }
            
            function onMouseLeave() {
                d3.selectAll(".tooltipDot")
                .remove()
            
                tooltip.style("opacity", 0)
            }




      }
    
    render() {

      //console.log("Data",this.state.data);

     return(
      <div>
        <svg className="d-block mx-auto" ref={el => (this.svg = el)} />
      </div> 
     );
    }

}

export default ChartApp2