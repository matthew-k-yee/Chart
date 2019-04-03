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

 fetchData = async () => {
  const request = await axios.get('https://public.opendatasoft.com/api/records/1.0/search/?dataset=1000-largest-us-cities-by-population-with-geographic-coordinates&facet=city&facet=state&refine.state=Massachusetts')
  const response = request.data.records
  const cities = response.map(city => city.fields.city)
  const populations = response.map(population => population.fields.population)
  this.setState({
    data: {
      city: cities,
      population: populations
  }
  })
 }

 componentDidMount = () => {
   this.fetchData()
}

  render() {
    return (
      <div className="App">
      <h1>Hello</h1>
      <Chart data={this.state.data}/>
      </div>
    );
  }
}

export default App;
