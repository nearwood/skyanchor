import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import './App.css';

import WeatherCard, { WeatherCardSkeleton } from './WeatherCard';
import WeatherAlerts from './WeatherAlerts';

//import alertData from './exampleData/alerts';

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    },
    marginBottom: theme.spacing(1)
  },
  drawer: {
    width: 200,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'inline-block'
    }
  },
  toolbar: {
    position: 'relative'
  },
  title: {
    flexGrow: 1,
  },
  progress: {
    color: 'gold'
  }
}));

//const versionString = process.env.REACT_APP_GIT_COMMIT_HASH ? `${process.env.REACT_APP_GIT_COMMIT_HASH}`.substr(0, 7) : 'dev';

const headers = {
  //Sigh... https://bugs.chromium.org/p/chromium/issues/detail?id=571722
  //Also User-Agent isn't allowed for CORS
  //"User-Agent": "(https://github.com/nearwood/skyanchor, nearwood@gmail.com)" //TODO: Consider externalizing this
};

export default function App() {
  //Track indvidual API call statuses with finite states.
  const [geolocationState, setGeolocationState] = useState(ApiState.initial);
  const [locationState, setLocationState] = useState(ApiState.initial);
  const [forecastState, setForecastState] = useState(ApiState.initial);
  const [hourlyState, setHourlyState] = useState(ApiState.initial);
  const [alertsState, setAlertsState] = useState(ApiState.initial);
  const appStatusMap = [geolocationState, locationState, forecastState, hourlyState, alertsState];

  const [errors, setErrors] = useState([]);
  const [warnings, setWarnings] = useState([]);

  //Data results from various API calls
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [cityState, setCityState] = useState("");
  const [forecastURL, setForecastURL] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [hourlyURL, setHourlyURL] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);
  const [alertsURL, setAlertsURL] = useState(null);
  const [alerts, setAlerts] = useState(null);

  //For the Alert modal dialog.
  const [showAlerts, setShowAlerts] = useState(false);

  const classes = useStyles();

  useEffect(
    /** Obtains the devices location, if possible. */
    function getLocation() {
      if (!navigator.geolocation) {
        setErrors(errors => [...errors, "Geolocation not supported in this browser."]);
        setGeolocationState(ApiState.error);
      } else {
        function success(data) {
          setLatitude(data.coords.latitude);
          setLongitude(data.coords.longitude);
          setGeolocationState(ApiState.loaded);
        }

        function failure(error) {
          console.error(error);
          setErrors(errors => [...errors, "Could not obtain device position."]);
          setForecast([]);
          setGeolocationState(ApiState.error);
        }

        setGeolocationState(ApiState.loading);
        navigator.geolocation.getCurrentPosition(success, failure);
      }
    }, []);

  useEffect(
    /** If the device location (lat/lon) is known, get the NOAA grid point it corresponds to for subsequent API calls.
     * Sets API endpoints for all other API calls (forecast, hourly forecast, alerts), and misc. location data.
    */
    function getLocationGridPoint() {
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
          setErrors(errors => [...errors, "Could not obtain NOAA grid point."]);
          console.error(err);
          setForecast([]);
          setLocationState(ApiState.error);
        }
      }

      if (typeof latitude === 'number' && typeof longitude === 'number') {
        setLocationState(ApiState.loading);
        fetchData();
      }
    }, [latitude, longitude]);

  useEffect(
    /** Obtains weather forecast data for the current location. */
    function getForecast() {
      async function fetchData() {
        try {
          const response = await fetch(forecastURL, { headers }).then(results => results.json());
          setForecast(response?.properties?.periods);
          setForecastState(ApiState.loaded);
        } catch (err) {
          setErrors(errors => [...errors, "Could not obtain NOAA forecast."]);
          console.error(err);
          setForecast([]);
          setForecastState(ApiState.error);
        }
      }

      if (forecastURL) {
        setForecastState(ApiState.loading);
        fetchData();
      }
    }, [forecastURL]);


  useEffect(
    /** Obtains hourly forecast data for the current location. */
    function getHourlyForecast() {
      async function fetchData() {
        try {
          const response = await fetch(hourlyURL).then(results => results.json());
          setHourlyForecast(response?.properties?.periods);
          setHourlyState(ApiState.loaded);
        } catch (err) {
          setWarnings(warnings => [...warnings, "Could not obtain NOAA hourly forecast."]);
          console.error(err);
          setHourlyState(ApiState.error);
        }
      }

      if (hourlyURL) {
        setHourlyState(ApiState.loading);
        fetchData();
      }
    }, [hourlyURL]);


  useEffect(
    /** Obtains weather alert/advisory data for the current location. */
    function getWeatherAlerts() {
      async function fetchData() {
        try {
          const response = await fetch(alertsURL).then(results => results.json());
          setAlerts(response?.features);
          setAlertsState(ApiState.loaded);
        } catch (err) {
          setWarnings(warnings => [...warnings, "Could not obtain NOAA weather alerts."]);
          console.error(err);
          setAlertsState(ApiState.error);
        }
      }

      if (alertsURL) {
        setAlertsState(ApiState.loading);
        fetchData();
      }
    }, [alertsURL]);

  /** Simple way to determine whether loading is "complete". A more thorough method would have to account
   * for the API call dependencies. */
  const loadingComplete = appStatusMap.every(state => state === ApiState.loaded);

  const alertCount = Array.isArray(alerts) ? alerts.length : 0;

  const showLoadingIndicator = errors.length === 0 && warnings.length === 0 && !loadingComplete;

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" noWrap className={classes.title}>
            <span role="img" aria-label="Skyanchor logo">🌩️</span>
            {cityState}
          </Typography>
          {showLoadingIndicator && <CircularProgress className={classes.progress} />}
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
      <Drawer className={classes.drawer} variant="permanent" anchor="left">
        <List>
          <ListItem button>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={"Alerts"} />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Grid container direction="column" justify="space-evenly">
        {errors.length > 0 && <Grid item xs={12}>
          {errors.map((error, i) => <Alert key={i} variant="filled" severity="error">{error}</Alert>)}
        </Grid>}
        {warnings.length > 0 && <Grid item xs={12}>
          {warnings.map((warning, i) => <Alert key={i} variant="filled" severity="warning">{warning}</Alert>)}
        </Grid>}
        {Array.isArray(forecast) ? forecast.map(period =>
          <Grid item xs={12} key={`${period.number}_${period.name}`}>
            <WeatherCard period={period} hourlyData={getHourlySubset(hourlyForecast, period)} />
          </Grid>)
          :
          <>
            <Grid item xs={12}>
              <WeatherCardSkeleton />
            </Grid>
            <Grid item xs={12}>
              <WeatherCardSkeleton />
            </Grid>
            <Grid item xs={12}>
              <WeatherCardSkeleton />
            </Grid>
            <Grid item xs={12}>
              <WeatherCardSkeleton />
            </Grid>
            <Grid item xs={12}>
              <WeatherCardSkeleton />
            </Grid>
            <Grid item xs={12}>
              <WeatherCardSkeleton />
            </Grid>
          </>
        }
      </Grid>
      <WeatherAlerts data={alerts} open={showAlerts} onClose={() => setShowAlerts(false)} />
      {/* <span>{versionString}</span><span>Created by <a href="https://twitter.com/nearwood">@nearwood</a>.</span><span><a href="https://github.com/nearwood/skyanchor"><img alt="Github logo" height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg" /></a></span> */}
    </div>
  );
}

/** Enum to track the state of an API call */
const ApiState = {
  initial: 'initial',
  loading: 'loading',
  error: 'error',
  loaded: 'loaded'
};

/** Given a api.weather.gov `relativeLocation` from the `/points` call, piece a "city, state" string together.
 * @returns {string} A string of the format: `City, ST` or an empty string `''` if the argument cannot be parsed.
*/
const parseLocation = (relativeLocation) => {
  if (relativeLocation?.properties) {
    const { city, state } = relativeLocation?.properties;
    return `${city}, ${state}`;
  }

  return '';
};

/** Hourly data comes as a large array for the entire forecast (7 days). This filters the hourly forecast
 * data to just what occurs between a general forecast period's `startTime` and `endTime`.
 * @returns {Array} An array containing any items from `hourlyData` that have `startTime` and `endTime` between the
 *                  period's `startTime` and `endTime`, or an empty array if the arguments cannot be parsed.
*/
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
