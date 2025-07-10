var apiKey = "3a2b4c5d6e7f8g9h0i1j2k3l4m5n6o7p";

function getWeather() {
  var city = document.getElementById("text-input").value;
  if (!city) {
    document.getElementById("res").innerHTML =
      '<p class="error">Please enter a city name!</p>';
    return;
  }
  document.getElementById("res").innerHTML = "<p>Loading...</p>";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        document.getElementById("res").innerHTML =
          '<p class="error">City not found!</p>';
        return;
      }
      var w = data.weather[0].main;
      var t = Math.round(data.main.temp);
      var h = data.main.humidity;
      document.getElementById(
        "res"
      ).innerHTML = `<div class="weather">${w}</div><div class="temp">${t}°C</div><div class="data">Humidity: ${h}%</div><div class="d">City: ${data.name}</div>`;
    })
    .catch((error) => {
      document.getElementById("res").innerHTML =
        '<p class="error">Error fetching weather data!</p>';
    });
}
