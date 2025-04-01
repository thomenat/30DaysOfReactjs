import React, { useState } from 'react'
import axios from 'axios';

function WeatherApp() {
    const [city, setCity] = useState('');
    const [temperature, setTemperature] = useState(0);
    const [condition, setCondition] = useState('');

    const handleSearch = () => {
        console.log('Searching for weather in', city);
    }

    const apiKey = '638d74ad921e437e92c144412250104';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    const fetchWeather = async () => {
        const response = await axios.get(apiUrl);
        console.log(response.data);
    }
  return (
    <div className='weather-app'>
        <h1>Weather App</h1>
        <div className='search'>
            <input type="text" placeholder='Search for a city' value={city} onChange={(e) => setCity(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
        </div>
        <div className='weather-info'>
            <h2>Weather in {city}</h2>
            <p>Temperature: {temperature}°C</p>
            <p>Condition: {condition}</p>
        </div>
    </div>
  )
}

export default WeatherApp