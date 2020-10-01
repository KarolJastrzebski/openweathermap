function renderCityName(data) {
  document.querySelector('.city-name').innerHTML = data.city.name;
}

function weekday(date) {
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return weekdays[date.getDay()];
}

function renderForecast(data) {
  let html = '<ol>';
  data.list.forEach(entry => {
    let parsedDate = new Date(entry.dt_txt);
    let htmlSegment = `<li>
        <dl>
        <dt>${weekday(parsedDate)} ${parsedDate.getHours()}:00</dt>
        <dd class="temp">${entry.main.temp} &deg;C</dd>
        <dd class="feels_like">${entry.main.feels_like} &deg;C</dd>
        <dd class="pressure">${entry.main.pressure}hPa</dd>
        <dd class="humidity">${entry.main.humidity}%</dd>
        </dl>
      </li>`
    html += htmlSegment;
  })
  html += '</ol>';

  document.querySelector('.forecast').innerHTML = html;
}

window.addEventListener('load', () => {
  fetch('/forecast?city=London,UK')
  .then(response => response.json())
  .then(data => {
    renderCityName(data);
    renderForecast(data);
  });
});
