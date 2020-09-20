import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  noWrap: {
    whiteSpace: 'nowrap'
  },
  extraData: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  }
}));

const getHour = (dateString) => new Date(dateString).getHours();

/** A table of weather data for each hour: Wind, temperature, etc. */
export default function HourlyReport(props) {
  const { data } = props;

  const classes = useStyles();

  return (
    <Table size="small" aria-label="hourly weather table">
      <TableHead>
        <TableRow>
          <TableCell>Time</TableCell>
          <TableCell align="right">Forecast</TableCell>
          <TableCell align="right">Temperature</TableCell>
          <TableCell align="right" className={classes.extraData}>Wind</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((hour) => (
          <TableRow key={hour.startTime}>
            <TableCell component="th" scope="row">{getHour(hour.startTime)}:00</TableCell>
            <TableCell align="right">{hour.shortForecast}</TableCell>
            <TableCell align="right" className={classes.noWrap}>{hour.temperature} °{hour.temperatureUnit}</TableCell>
            <TableCell align="right" className={`${classes.noWrap} ${classes.extraData}`}>{hour.windSpeed} {hour.windDirection}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
