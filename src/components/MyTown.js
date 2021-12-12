import React from "react";
import { Component } from "react";
import { convert, getCelsiusTemp, WEATHER_URL } from "../service/Weather";
import cold from "./../assets/cold.png";
import mild from "./../assets/mild.png";
import sunny from "./../assets/sunny.png";
import mumbai from "./../assets/mumbai.jpeg";

class MyTown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 0,
      temp: 0,
      unit: "C",
    };

    this.fetchData = this.fetchData.bind(this);
    this.changeUnit = this.changeUnit.bind(this);
  }

  fetchData() {
    fetch(WEATHER_URL)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({
          temperature: getCelsiusTemp(response.main.temp),
          temp: getCelsiusTemp(response.main.temp),
          unit: "C",
        });
      });
  }

  changeUnit() {
    this.setState({
      unit: this.state.unit === "C" ? "F" : "C",
      temp: convert(this.state.unit, this.state.temp),
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        <img src={mumbai} alt="city" height="300" width="600" />
        <div>
          <h4> I hail from Mumbai, India🇮🇳</h4>
          <p>
            Mumbai is located on the west coast of India. A financial center,
            it's India's largest city.
          </p>
        </div>
        <div>
          {this.state.temperature <= 10 ? (
            <img src={cold} alt="Cold" height="40" width="55" />
          ) : (this.state.temperature > 10) & (this.state.temperature < 20) ? (
            <img src={mild} alt="Mild" height="40" width="55" />
          ) : (
            <img src={sunny} alt="Sunny" height="60" width="80" />
          )}
          <div>
            <span style={{ marginTop: "5px" }}>
              {/* eslint-disable-next-line */}
              {this.state.temp + " " + "\xB0" + this.state.unit}
            </span>
            <br />
            <br />
            <button onClick={this.changeUnit}>
              Change Temp to &deg;{this.state.unit === "C" ? "F" : "C"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MyTown;
