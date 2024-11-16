async function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = '405f728c090daf7f25b8fed7f4c658b6';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById('location').innerText = `${data.name}, ${data.sys.country}`;
      document.getElementById('temp').innerText = `${data.main.temp.toFixed(1)}°C`;
      document.getElementById('description').innerText = data.weather[0].description;

      document.getElementById('temp-max').innerText = `${data.main.temp_max.toFixed(1)}°C`;
      document.getElementById('temp-min').innerText = `${data.main.temp_min.toFixed(1)}°C`;
      document.getElementById('humidity').innerText = `${data.main.humidity}%`;
      document.getElementById('wind').innerText = `${data.wind.speed} km/h`;

      const iconCode = data.weather[0].icon;
      document.getElementById('weather-icon').className = `wi wi-owm-${data.weather[0].id}`;

      document.getElementById('weather-result').style.display = 'block';
    } else {
      document.getElementById('weather-result').style.display = 'none';
      alert('Cidade não encontrada. Verifique o nome e tente novamente.');
    }
  } catch (error) {
    document.getElementById('weather-result').style.display = 'none';
    alert('Erro ao obter dados. Tente novamente mais tarde.');
    console.error(error);
  }
}
