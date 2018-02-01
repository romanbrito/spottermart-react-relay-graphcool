import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: '30vh',
    width: '50vw',
  }),
  row: {
    width: 'auto',
  },
  container: {
    margin: 'auto',
    width: '50%'
  }
});

function PaperSheet(props) {
  const {classes} = props;
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <Paper className={classes.root} elevation={4}>
          <Typography type="headline" component="h3">
            Search
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
          </Typography>
        </Paper>
      </div>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);