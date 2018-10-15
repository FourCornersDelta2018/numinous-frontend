import React, { Component } from 'react';
import Show from './show'
import sampleWeather from './sample-response'

class Weather extends Component {
  state = {
    temperature: undefined,
    description: undefined,
  }
  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Baltimore,US&appid=11e423d46efed1fcc46b12f860d39adf&units=imperial`);
    const data = await api_call.json();
    this.setState({
      temperature: data.main.temp,
      description: data.weather[0].main,
    });
  }

  render() {
    return (
      <div>
        temperature={Math.round(this.state.temperature)}
        description={this.state.description}
      </div>
    );
  }
}

export default Weather;
