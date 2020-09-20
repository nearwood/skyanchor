import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';


const useStyles = makeStyles((theme) => ({
  alertHeader: {
    backgroundColor: theme.palette.warning.light
    //color: 
  },
  alertHeaderIcon: {
    position: 'relative',
    top: 4
  },
  divider: {
    width: '100%',
    height: theme.spacing(1)
  },
  noWrap: {
    whiteSpace: 'nowrap'
  }
}));

/** A modal that displays weather alerts and advisories
 * Note: Currently React complains about MUI's Modal using `findDOMNode`. See: https://github.com/mui-org/material-ui/issues/13394.
 */
export default function WeatherAlerts(props) {
  const { open, onClose, data } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  let alerts = <div>No active alerts</div>;

  if (Array.isArray(data) && data.length > 0) {
    alerts = data.map(alert => <WeatherAlert key={alert.id} alert={alert.properties} />);
  }

  return (
    <Dialog fullScreen={fullScreen} open={open} aria-labelledby="alert-dialog-title">
      <DialogTitle id="alert-dialog-title">Weather Alerts</DialogTitle>
      <DialogContent>
        {alerts}
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose} color="primary">Close</Button>
      </DialogActions>
    </Dialog>
  );
}

/** A single alert, with a headline, severity, etc. */
export function WeatherAlert({ alert }) {
  const classes = useStyles();

  return (<>
    <Table size="small" aria-label="weather alerts/advisories">
      <TableHead className={classes.alertHeader}>
        <TableRow>
          <TableCell align="left"><Severity level={alert.severity}/></TableCell>
          <TableCell align="right">{alert.event}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell component="th" colSpan={2}>{alert.headline}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center" colSpan={2}>{alert.areaDesc}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="left">Effective:</TableCell>
          <TableCell align="right">{alert.effective}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="left">Expires:</TableCell>
          <TableCell align="right">{alert.expires}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <div className={classes.divider}/>
  </>);
}

/** Shows a severity level with an icon if known.
 * Severity levels: extreme, severe, moderate, minor, unknown.
 */
function Severity({level}) {
  const classes = useStyles();

  switch (level) {
    default:
    case "Unknown":
      return null;
    case "Minor":
      return <><WarningRoundedIcon className={classes.alertHeaderIcon}/><span>Minor</span></>;
    case "Moderate":
      return <><WarningRoundedIcon className={classes.alertHeaderIcon} color='primary'/><span>Moderate</span></>;
    case "Severe":
      return <><WarningRoundedIcon className={classes.alertHeaderIcon} color='secondary'/><span>Severe</span></>;
    case "Extreme":
      return <><WarningRoundedIcon className={classes.alertHeaderIcon} color='error'/><span>Extreme</span></>;
  }
}
