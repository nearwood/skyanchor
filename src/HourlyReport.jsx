import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
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

export default function HourlyReport(props) { //TODO prop-types
  //const { hourlyForecast } = props;
  const hourlyForecast = [];

  const classes = useStyles();

  return (
        <TableContainer component={Paper}>
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
        </TableContainer>
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
