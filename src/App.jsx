import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  //const [location, setLocation] = useState(null); //39.7456,-97.0892
  const [forecast, setForecast] = useState(null);
  const [forecastURL, setForecastURL] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.weather.gov/points/39.7456,-97.0892').then(results => results.json());
      console.log(response);
      setForecastURL(response?.properties?.forecast);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(forecastURL).then(results => results.json());
      console.log(response);
      setForecast(response?.properties?.periods);
    }
    if (forecastURL) {
      fetchData();
    }
  }, [forecastURL]);

  return (
    <div className="App">
      <header className="App-header">
        <span role="img" aria-label="skyanchor logo" className="logo">🌩️</span>
      </header>
      <div>
        {Array.isArray(forecast) && forecast.map(period => <div key={period.name}>
          <img alt="weather icon" src={period.icon}/><span>{period.name}</span><span>{period.detailedForecast}</span>
        </div>)}
      </div>
    </div>
  );
}

/*
properties:
@id: "https://api.weather.gov/points/39.7456,-97.0892"
@type: "wx:Point"
county: "https://api.weather.gov/zones/county/KSC201"
cwa: "TOP"
fireWeatherZone: "https://api.weather.gov/zones/fire/KSZ009"
forecast: "https://api.weather.gov/gridpoints/TOP/31,80/forecast"
forecastGridData: "https://api.weather.gov/gridpoints/TOP/31,80"
forecastHourly: "https://api.weather.gov/gridpoints/TOP/31,80/forecast/hourly"
forecastOffice: "https://api.weather.gov/offices/TOP"
forecastZone: "https://api.weather.gov/zones/forecast/KSZ009"
gridId: "TOP"
gridX: 31
gridY: 80
observationStations: "https://api.weather.gov/gridpoints/TOP/31,80/stations"
radarStation: "KTWX"
relativeLocation: {type: "Feature", geometry: {…}, properties: {…}}
timeZone: "America/Chicago"
*/

/*
properties:
elevation: {value: 441.96, unitCode: "unit:m"}
forecastGenerator: "BaselineForecastGenerator"
generatedAt: "2020-09-15T22:00:13+00:00"
periods: Array(14)
0: {number: 1, name: "This Afternoon", startTime: "2020-09-15T17:00:00-05:00", endTime: "2020-09-15T18:00:00-05:00", isDaytime: true, …}
1: {number: 2, name: "Tonight", startTime: "2020-09-15T18:00:00-05:00", endTime: "2020-09-16T06:00:00-05:00", isDaytime: false, …}
2: {number: 3, name: "Wednesday", startTime: "2020-09-16T06:00:00-05:00", endTime: "2020-09-16T18:00:00-05:00", isDaytime: true, …}
3: {number: 4, name: "Wednesday Night", startTime: "2020-09-16T18:00:00-05:00", endTime: "2020-09-17T06:00:00-05:00", isDaytime: false, …}
4: {number: 5, name: "Thursday", startTime: "2020-09-17T06:00:00-05:00", endTime: "2020-09-17T18:00:00-05:00", isDaytime: true, …}
5: {number: 6, name: "Thursday Night", startTime: "2020-09-17T18:00:00-05:00", endTime: "2020-09-18T06:00:00-05:00", isDaytime: false, …}
6: {number: 7, name: "Friday", startTime: "2020-09-18T06:00:00-05:00", endTime: "2020-09-18T18:00:00-05:00", isDaytime: true, …}
7: {number: 8, name: "Friday Night", startTime: "2020-09-18T18:00:00-05:00", endTime: "2020-09-19T06:00:00-05:00", isDaytime: false, …}
8: {number: 9, name: "Saturday", startTime: "2020-09-19T06:00:00-05:00", endTime: "2020-09-19T18:00:00-05:00", isDaytime: true, …}
9: {number: 10, name: "Saturday Night", startTime: "2020-09-19T18:00:00-05:00", endTime: "2020-09-20T06:00:00-05:00", isDaytime: false, …}
10: {number: 11, name: "Sunday", startTime: "2020-09-20T06:00:00-05:00", endTime: "2020-09-20T18:00:00-05:00", isDaytime: true, …}
11: {number: 12, name: "Sunday Night", startTime: "2020-09-20T18:00:00-05:00", endTime: "2020-09-21T06:00:00-05:00", isDaytime: false, …}
12: {number: 13, name: "Monday", startTime: "2020-09-21T06:00:00-05:00", endTime: "2020-09-21T18:00:00-05:00", isDaytime: true, …}
13: {number: 14, name: "Monday Night", startTime: "2020-09-21T18:00:00-05:00", endTime: "2020-09-22T06:00:00-05:00", isDaytime: false, …}
length: 14
__proto__: Array(0)
units: "us"
updateTime: "2020-09-15T20:25:36+00:00"
updated: "2020-09-15T20:25:36+00:00"
validTimes: "2020-09-15T14:00:00+00:00/P7DT11H"
*/

/*
detailedForecast: "Mostly clear, with a low around 59. South wind 5 to 10 mph."
endTime: "2020-09-16T06:00:00-05:00"
icon: "https://api.weather.gov/icons/land/night/few?size=medium"
isDaytime: false
name: "Tonight"
number: 2
shortForecast: "Mostly Clear"
startTime: "2020-09-15T18:00:00-05:00"
temperature: 59
temperatureTrend: null
temperatureUnit: "F"
windDirection: "S"
windSpeed: "5 to 10 mph"
*/