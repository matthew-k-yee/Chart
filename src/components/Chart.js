import React, { Component } from 'react' 
import {Bar, Line, Pie} from 'react-chartjs-2';


class Chart extends Component {

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
    location: 'Massachusetts'
  }
  render() {
    const city = this.props.data.city
    const population = this.props.data.population
    const data = {
      labels: [...city],
      datasets: [{
        data: [...population],
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#800000',
        '#008000',
        '#FF0000',
        'FFA500',
        '#20B2AA',
        '#0000FF',
        '#ADFF2F'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#800000',
        '#008000',
        '#FF0000',
        'FFA500',
        '#20B2AA',
        '#0000FF',
        '#ADFF2F'
        ]
      }]
    };

    return (
      <div>
        <Pie 
          data={data}
          options={{
            title:{
              display: this.props.displayTitle,
              text: `Largest Cities In ${this.props.location}`,
              fontSize: 30
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
            }}
          />
        <Bar 
          data={data}
          options={{
            legend: {
              display: false,
            }, 
            scales: {
              xAxes: [{
                barPercentage: 1,
                barThickness: 100,
                maxBarThickness: 50,
                minBarLength: 5,
                gridLines: {
                    offsetGridLines: true
                }
          }]
    }
            }}
          />
      </div>
    )
  }
}

export default Chart