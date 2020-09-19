import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  noWrap: {
    whiteSpace: 'nowrap'
  }
}));

export default function Alerts(props) { //TODO prop-types
  const { open, onClose, data } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();

  let alerts = <div>No active alerts</div>;

  if (Array.isArray(data) && data.length > 0) { //TODO prop-types with hooks?
    alerts = data.map(alert =>
      <div key={alert.id}>
        <div>{alert.properties.areaDesc}</div>
        <div className={classes.noWrap}>{alert.properties.severity}</div>
        <div>{alert.properties.event}</div>
        <div>{alert.properties.headline}</div>
        <div>Effective: {alert.properties.effective}</div>
        <div>Expires: {alert.properties.expires}</div>
      </div>);
  }

  return (
    <Dialog fullScreen={fullScreen} open={open} aria-labelledby="alert-dialog-title">
        <DialogTitle id="alert-dialog-title">Weather Alerts</DialogTitle>
        <DialogContent>
            {alerts}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
  );
}
