import React from 'react';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField'

const styles = theme => ({
  search: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: '30vh',
    marginBottom: '10vh',
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
  },
  paper: {
    marginTop: '5vh',
    height: '17vh',
    textAlign: 'center',
    paddingTop: '3vh'
  }
});

function FrontPage(props) {
  const {classes} = props;
  return (
    <div>
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
      <div>
        <Paper className={classes.paper} elevation={4}>
          <Typography type="headline" component="h3">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
          </Typography>
        </Paper>
      </div>
    </div>
  );
}


export default withStyles(styles)(FrontPage);