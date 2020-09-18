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
  }
}));

export default function Alerts(props) { //TODO prop-types
  //const { hourlyForecast } = props;
  const alerts = [];

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
              {alerts.map((alert) => (
                <TableRow key={alert.name}>
                  <TableCell component="th" scope="row">
                    {alert.startTime}
                  </TableCell>
                  <TableCell align="right">{alert.isDaytime ? 'day' : 'night'}</TableCell>
                  <TableCell align="right">{alert.temperature} °{alert.temperatureUnit}</TableCell>
                  <TableCell align="right">{alert.windSpeed} {alert.windDirection}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  );
}
