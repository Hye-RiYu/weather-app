import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

// 1. 앱이 실행되자마자 현재 위치기반의 날씨가 보인다
// 2. 날씨정보에는 도시,섭씨,화씨,날씨상태
// 3. 5개의 버튼이 있다 (1개는 현재위치, 4개는 다른 도시)
// 4. 도시 버튼을 클릭 할 때 마다 도시별 날씨가 나온다
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다
// 6. 데이터를 들고 오는 동안 로딩 스피너가 돈다

function App() {

  const [weather, setWeather] = useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=323793d460fed499594eda7113ce20e8`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  }

  useEffect(() => {
    getCurrentLocation()
  },[]);
  return (
    <div>
      <div className='container'>
        <div className='wrap'>
          <WeatherBox weather={weather} />
          <WeatherButton />
        </div>
      </div>
    </div>
  );
}

export default App;
