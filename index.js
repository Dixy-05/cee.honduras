function getWeatherInfo(e) {
  let WeatherTemperature = 'imperial';
  fetch(
    'https://api.openweathermap.org/data/2.5/forecast?q=siguatepeque&appid=a5a7d4e39e41ed731c513c602e00d311&cnt=1' +
      '&units=' +
      WeatherTemperature
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(new Error('Server error, please retry'));
      }
    })
    .then((weatherData) => {
      console.log(weatherData);
      let temperatureInfo = document.getElementById('temperature');
      temperatureInfo.innerHTML = weatherData.list[0].main.temp + '°' + 'F';
      let faranheitTemp = document.getElementById('faranheit');
      let celciusTemp = document.getElementById('celcius');
      celciusTemp.addEventListener('click', changeToCelcius);
      function changeToCelcius() {
        temperatureInfo.innerHTML =
          ((weatherData.list[0].main.temp - 32) * 5) / 9 + '°' + 'C';
      }
      faranheitTemp.addEventListener('click', changeToFaranheit);
      function changeToFaranheit() {
        temperatureInfo.innerHTML = weatherData.list[0].main.temp + '°' + 'F';
      }
    })
    .catch((err) => {
      let Error = document.getElementById('WeatherDiv');
      Error.innerHTML = err;
    });
}
getWeatherInfo();
