import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

export const WeatherIcons = {
  "01d": "/images/sunny.svg",
  "01n": "/images/night.svg",
  "02d": "/images/day.svg",
  "02n": "/images/cloudy-night.svg",
  "03d": "/images/cloudy.svg",
  "03n": "/images/cloudy.svg",
  "04d": "/images/perfect-day.svg",
  "04n": "/images/cloudy-night.svg",
  "09d": "/images/rain.svg",
  "09n": "/images/rain-night.svg",
  "10d": "/images/rain.svg",
  "10n": "/images/rain-night.svg",
  "11d": "/images/storm.svg",
  "11n": "/images/storm.svg",
};

const Container = styled.div`

  border-radius: 10px;
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3f4c7923b7629e6fd09e5b9129ba56b9`,
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
