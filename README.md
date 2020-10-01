# Open Weather Map

This is a recruitment exercise done in around 4 hours.


## Running

Working implementation requires a valid API key. It can be obtained from [OpenWeatherMap.org](https://openweathermap.org/price).

The rest is pretty standard, i.e.

    API_KEY=fz961a07aae64b9f8c4b6a20228730dfq6 npm start


## Room for improvement

1. [d3](https://d3js.org) for graphical representation of temperatures, pressure, and humidity.
1. A nice looking horizontally-scrolled table similar to [BBC's weather](https://www.bbc.co.uk/weather/2643743).
1. Using ReactJS or VueJS for rendering templated data.
1. Letting user choose the city (partially implemented as backend accepts `city` parameter, however, it is hard-coded on the client-side).
1. Docker just to make things fancy.
