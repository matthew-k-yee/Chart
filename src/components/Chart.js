import React, { Component } from 'react' 
import {Bar, Line, Pie} from 'react-chartjs-2';


class Chart extends Component {
  render() {
    const data = {
      datasets: [{
          data: [10, 20, 30]
      }],
  
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
          'Red',
          'Yellow',
          'Blue'
      ]
  };    
    return (
      <div>
        <Pie data={data} />
      </div>
    )
  }
}

export default Chart