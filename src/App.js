import React, { Component } from 'react';
import axios from 'axios'
import Chart from './components/Chart'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = ({
      data: {
        city: [],
        population: []
    }
    })
  }

 componentDidMount = async () => {
  const request = await axios.get('https://public.opendatasoft.com/api/records/1.0/search/?dataset=1000-largest-us-cities-by-population-with-geographic-coordinates&facet=city&facet=state&refine.state=Massachusetts')
  const response = request.data.records
  // console.log(response)
  const cities = response.map(city => city.fields.city)
  const populations = response.map(population => population.fields.population)
  // console.log(cities, populations)
  this.setState({
    data: {
      city: cities,
      population: populations
  }
  })
}

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
      <h1>Hello</h1>
      <Chart />
      </div>
    );
  }
}

export default App;
