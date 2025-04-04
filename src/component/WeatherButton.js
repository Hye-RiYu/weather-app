import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div className='weather-button'>
      <button type="button" className="btn btn-warning">Current Location</button>
      <button type="button" className="btn btn-warning">Incheon</button>
      <button type="button" className="btn btn-warning">Jeju Island</button>
    </div>
  )
}

export default WeatherButton
