import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField'

const styles = theme => ({
  search: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: '30vh',
    width: '50vw',
    backgroundColor: '#fafafa',
    borderRadius: 10
  }),
  label: {
    paddingLeft: 25,
    color: 'green'
  },
  row: {
    width: 'auto',
  },
  container: {
    margin: 'auto',
    width: '50%'
  }
});

function FrontPage(props) {
  const {classes} = props;
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <TextField
          id="search"
          label="Search"
          InputLabelProps={{
            className: classes.label
          }}
          type="search"
          className={classes.search}
          margin="normal"
        />
      </div>
    </div>
  );
}


export default withStyles(styles)(FrontPage);