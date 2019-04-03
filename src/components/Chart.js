import React, { Component } from 'react' 
import {Bar, Line, Pie} from 'react-chartjs-2';


class Chart extends Component {
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
        '#FFFFF0',
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
        '#FFFFF0',
        '#ADFF2F'
        ]
      }]
    };

    return (
      <div>
        <Pie data={data} />
      </div>
    )
  }
}

export default Chart