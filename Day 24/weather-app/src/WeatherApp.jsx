import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css';

function WeatherApp() {
    const [cityInput, setCityInput] = useState('');
    const [city, setCity] = useState('');
    const [temperature, setTemperature] = useState(null);
    const [condition, setCondition] = useState(null);
    const [error, setError] = useState(null);
    const apiKey = '638d74ad921e437e92c144412250104';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;


    useEffect(() => {
        if (city === '') return;
      
        const fetchWeather = async () => {
            try {
                setError(null);
                const response = await axios.get(apiUrl);
                setTemperature(response.data.current.temp_c);
                setCondition(response.data.current.condition.text);
            } catch (error) {
                setTemperature(null);
                setCondition(null);
                setError('City not found. Please try again');
            }
        };

        fetchWeather();
    }, [city]);

    const handleSearch = () => {
        if (cityInput.trim() === '') return;
    
        const normalizedCity = cityInput.trim().toLowerCase();
        const capitalizedCity = normalizedCity.charAt(0).toUpperCase() + normalizedCity.slice(1);
        setCity(capitalizedCity);
    };


  return (
    <div className='weather-app'>
        <h1>Weather App</h1>
        <div className='search'>
            <input 
            type="text" 
            placeholder='Search for a city' 
            value={cityInput} 
            onChange={(e) => setCityInput(e.target.value)} 
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    handleSearch();
                }
            }} />
            <button onClick={handleSearch}>Search</button>
        </div>
        {error && <div className='error'>{error}</div>}

        {temperature && (
            <div className='weather-info'>
                <p>Weather in <strong>{city}</strong></p>
                <p>🌡️Temperature: {temperature}°C</p>
                <p>🌤️Condition: {condition}</p>
            </div>
        )}
    </div>
    )
};

export default WeatherApp;