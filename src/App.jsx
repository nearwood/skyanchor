import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

// import CloudIcon from '@material-ui/icons/Cloud';
// import ScheduleIcon from '@material-ui/icons/Schedule';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import './App.css';

import WeatherCard from './WeatherCard';
import Alerts from './Alerts';

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
    marginBottom: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {

  }
}));

//const versionString = process.env.REACT_APP_GIT_COMMIT_HASH ? `${process.env.REACT_APP_GIT_COMMIT_HASH}`.substr(0, 7) : 'dev';

const headers = {
  //Sigh... https://bugs.chromium.org/p/chromium/issues/detail?id=571722
  //Also User-Agent isn't allowed for CORS
  //"User-Agent": "(https://github.com/nearwood/skyanchor, nearwood@gmail.com)" //TODO: Consider externalizing this
};

const ApiState = {
  initial: 'initial',
  loading: 'loading',
  error: 'error',
  loaded: 'loaded'
};

export default function App() {
  const [geolocationState, setGeolocationState] = useState(ApiState.initial);
  const [locationState, setLocationState] = useState(ApiState.initial);
  const [forecastState, setForecastState] = useState(ApiState.initial);
  const [hourlyState, setHourlyState] = useState(ApiState.initial);
  const [alertsState, setAlertsState] = useState(ApiState.initial);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [cityState, setCityState] = useState("Loading...");
  const [forecastURL, setForecastURL] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [hourlyURL, setHourlyURL] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);
  const [alertsURL, setAlertsURL] = useState(null);
  const [alerts, setAlerts] = useState(null);

  const [showAlerts, setShowAlerts] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    if (!navigator.geolocation) {
      //TODO: Maybe a notification of some type.
      setGeolocationState(ApiState.error);
    } else {
      function success(data) {
        setLatitude(data.coords.latitude);
        setLongitude(data.coords.longitude);
        setGeolocationState(ApiState.loaded);
      }

      function failure(error) {
        console.error(error);
        setGeolocationState(ApiState.error);
      }

      setGeolocationState(ApiState.loading);
      navigator.geolocation.getCurrentPosition(success, failure);
    }
  }, []);

  const parseLocation = (relativeLocation) => {
    if (relativeLocation?.properties) {
      const { city, state } = relativeLocation?.properties;
      return `${city}, ${state}`;
    }

    return '';
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://api.weather.gov/points/${latitude},${longitude}`, { headers }).then(results => results.json());
        setCityState(parseLocation(response?.properties?.relativeLocation));
        setForecastURL(response?.properties?.forecast);
        setHourlyURL(response?.properties?.forecastHourly);
        //State
        //setAlertsURL(`https://api.weather.gov/alerts/active?status=actual&message_type=alert,update,cancel&area=CA`);
        //API allows county value for zone, but location response only has that as part of a URL
        const latLonPoint = `${latitude},${longitude}`;
        setAlertsURL(`https://api.weather.gov/alerts/active?status=actual&message_type=alert,update,cancel&point=${encodeURIComponent(latLonPoint)}`);
        setLocationState(ApiState.loaded);
      } catch (err) {
        console.error(err);
        setLocationState(ApiState.error);
      }
    }

    if (typeof latitude === 'number' && typeof longitude === 'number') {
      setLocationState(ApiState.loading);
      fetchData();
    }
  }, [latitude, longitude]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(forecastURL, { headers }).then(results => results.json());
        setForecast(response?.properties?.periods);
        setForecastState(ApiState.loaded);
      } catch (err) {
        console.error(err);
        setForecastState(ApiState.error);
      }
    }

    if (forecastURL) {
      setForecastState(ApiState.loading);
      fetchData();
    }
  }, [forecastURL]);

  const getHourlySubset = (hourlyData, period) => {
    if (!Array.isArray(hourlyData) || !period) {
      return [];
    }

    const start = new Date(period.startTime);
    const end = new Date(period.endTime);
    return hourlyData.filter(hour => {
      const hourStart = new Date(hour.startTime);
      const hourEnd = new Date(hour.endTime);
      return (hourStart >= start && hourEnd <= end);
    });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(hourlyURL).then(results => results.json());
        setHourlyForecast(response?.properties?.periods);
        setHourlyState(ApiState.loaded);
      } catch (err) {
        console.error(err);
        setHourlyState(ApiState.error);
      }
    }

    if (hourlyURL) {
      setHourlyState(ApiState.loading);
      fetchData();
    }
  }, [hourlyURL]);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(alertsURL).then(results => results.json());
        setAlerts(response?.features);
        setAlertsState(ApiState.loaded);
      } catch (err) {
        console.error(err);
        setAlertsState(ApiState.error);
      }
    }

    if (alertsURL) {
      setAlertsState(ApiState.loading);
      fetchData();
    }
  }, [alertsURL]);

  const loadingProgress = () => {
    const map = [geolocationState, locationState, forecastState, hourlyState, alertsState];
    const increment = Math.round(100 / map.length);
    const value = map.reduce((total, value) => total + (value === ApiState.loaded ? increment : 0), 0);
    return value;
  };

  const alertCount = Array.isArray(alerts) ? alerts.length : 0;

  return (
    <div className="App" style={{ padding: 10 }}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            <span role="img" aria-label="Skyanchor logo">🌩️</span>
            {cityState}
          </Typography>
          <IconButton edge="end" className={classes.menuButton} disabled={alertCount === 0}
            color="inherit" aria-label="alerts" onClick={() => setShowAlerts(true)}>
            {alertCount > 0 ?
              <Badge badgeContent={alertCount} color="error">
              <NotificationImportantIcon />
              </Badge>
              : 
              <NotificationImportantIcon />
            }
          </IconButton>
        </Toolbar>
      </AppBar>
      {forecastState !== ApiState.loaded && <LinearProgress variant="determinate" value={loadingProgress()} />}
      <Grid container spacing={2}>
        {process.env.NODE_ENV !== 'production' && <Grid item xs={12} md={6} lg={2}>
          <div>Geo: {geolocationState}</div>
          <div>Grid: {locationState}</div>
          <div>Forecast: {forecastState}</div>
          <div>Hourly: {hourlyState}</div>
          <div>Alerts: {alertsState}</div>
        </Grid>}
        {Array.isArray(forecast) && forecast.map(period =>
          <Grid item xs={12} md={6} lg={2} key={`${period.number}_${period.name}`}>
            <WeatherCard period={period} hourlyData={getHourlySubset(hourlyForecast, period)} />
          </Grid>)}
      </Grid>
      <Alerts data={alerts} open={showAlerts} onClose={() => setShowAlerts(false)} />
      {/* <span>{versionString}</span><span>Created by <a href="https://twitter.com/nearwood">@nearwood</a>.</span><span><a href="https://github.com/nearwood/skyanchor"><img alt="Github logo" height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg" /></a></span> */}
    </div>
  );
}
