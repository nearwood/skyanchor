import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

export default function App(props) { //TODO prop-types
  const { period, hourlyURL } = props;

  const classes = useStyles();
  const [expanded, setExpanded] = useState(true);
  const [hourlyForecast, setHourlyForecast] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(hourlyURL).then(results => results.json());
      console.log(response);
      setHourlyForecast(response?.properties?.periods);
    }
    if (hourlyURL) {
      fetchData();
    }
  }, [hourlyURL]);

  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={period.icon} aria-label="weather icon" />}
        title={period.name}
        subheader="September 14, 2016"
      />
      <CardContent>
        <span>{period.temperature} °{period.temperatureUnit}</span><div>{period.shortForecast}</div>
      </CardContent>
      {/* <Divider variant="middle" /> */}
      {period.number === 1 && <>
        <CardActions>
          <IconButton
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label="show hourly">
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Time</TableCell>
                <TableCell align="right">Day?</TableCell>
                <TableCell align="right">Temperature</TableCell>
                <TableCell align="right">Wind</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hourlyForecast.map((hour) => (
                <TableRow key={hour.name}>
                  <TableCell component="th" scope="row">
                    {hour.startTime}
                  </TableCell>
                  <TableCell align="right">{hour.isDaytime ? 'day' : 'night'}</TableCell>
                  <TableCell align="right">{hour.temperature} °{hour.temperatureUnit}</TableCell>
                  <TableCell align="right">{hour.windSpeed} {hour.windDirection}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Collapse>
      </>}
    </Card>
  );
}

/*
"properties": {
  "updated": "2020-09-17T02:16:14+00:00",
  "units": "us",
  "forecastGenerator": "HourlyForecastGenerator",
  "generatedAt": "2020-09-17T03:06:04+00:00",
  "updateTime": "2020-09-17T02:16:14+00:00",
  "validTimes": "2020-09-16T20:00:00+00:00/P8DT5H",
  "elevation": {
    "value": 7.0103999999999997,
    "unitCode": "unit:m"
  },
  "periods": [
  {
    "number": 1,
    "name": "",
    "startTime": "2020-09-16T22:00:00-05:00",
    "endTime": "2020-09-16T23:00:00-05:00",
    "isDaytime": false,
    "temperature": 79,
    "temperatureUnit": "F",
    "temperatureTrend": null,
    "windSpeed": "5 mph",
    "windDirection": "N",
    "icon": "https://api.weather.gov/icons/land/night/bkn?size=small",
    "shortForecast": "Mostly Cloudy",
    "detailedForecast": ""
  },
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
temperatureTrend: null | temperatureTrend: "falling" | temperatureTrend: "rising"
temperatureUnit: "F"
windDirection: "S"
windSpeed: "5 to 10 mph"
*/
