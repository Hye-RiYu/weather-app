import React from 'react'
import Button from 'react-bootstrap/Button';

const WeatherButton = ({cities, setCity, handleCityChange, city}) => {
  console.log('cities', cities)
  console.log('setCity!!!!!!!!!!',setCity)
  return (
    <div className='weather-button'>
      <Button variant={`${city == null ? "outline-warning" : "warning"}`}
      onClick={() => handleCityChange("current")}>
        Current Location
      </Button>
      {cities.map((item) => (
        <Button 
        onClick={() => setCity(item)}
        variant={`${
          city === item ? "outline-warning" : "warning"
        }`}
        >
          {item}
        </Button>
      ))}
    </div>
  )
}

export default WeatherButton
