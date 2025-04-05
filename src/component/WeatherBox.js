import React from 'react'

const WeatherBox = ({weather}) => {
  console.log("weather", weather)
  return (
    <div className='weather-box'>
      <div>{weather?.name}</div>
      <h3>{weather?.main.temp}C / {(weather?.main.temp * 9 / 5 + 32).toFixed(2)}화씨</h3>
      <h5>{weather?.weather[0].description}</h5>
    </div>
  )
}

export default WeatherBox
