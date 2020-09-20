import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Skeleton from '@material-ui/lab/Skeleton';
import HourlyReport from './HourlyReport';

const useStyles = makeStyles((theme) => ({
  forecast: {
    fontSize: '1.2em'
  },
  nowrap: {
    whiteSpace: 'nowrap'
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  divider: {
    margin: '4px 0'
  },
  card: {
    margin: theme.spacing(1)
  }
}));

/** A card that displays short weather forecast information, but expands to show an hourly breakdown. */
export default function WeatherCard(props) {
  const { period, hourlyData } = props;

  const [showHourly, setShowHourly] = useState(false);

  const classes = useStyles();

  const convertDate = (utcString) => {
    const dateObj = new Date(utcString);
    return dateObj?.toLocaleDateString();
  };

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => hourlyData.length > 0 ? setShowHourly(!showHourly) : void 0}>
        <CardHeader
          avatar={<Avatar src={period.icon} variant="square" aria-label="weather icon" className={classes.avatar} />}
          title={<span className={classes.forecast}><span className={classes.nowrap}>{period.name}</span> - <span className={classes.nowrap}>{period.temperature} °{period.temperatureUnit}</span> - <span>{period.shortForecast}</span></span>}
          subheader={convertDate(period.startTime)}
        />
      </CardActionArea>
      {showHourly &&
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p"> {period.detailedForecast} </Typography>
          <Divider variant="middle" className={classes.divider} />
          <HourlyReport data={hourlyData} />
        </CardContent>
      }
    </Card>
  );
}

/** A MUI Skeleton of a WeatherCard to reduce appearance of load-time */
export function WeatherCardSkeleton() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Skeleton animation="wave" variant="rect" className={classes.avatar} />}
        title={<Skeleton animation="wave" height={24} width="66%" style={{ marginBottom: 6 }} />}
        subheader={<Skeleton animation="wave" height={10} width="25%" />}
      />
    </Card>
  );
}
