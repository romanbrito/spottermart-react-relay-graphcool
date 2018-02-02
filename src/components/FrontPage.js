import React, {Component} from 'react';
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

class FrontPage extends Component {

  state = {
    search: ''
  }


  render() {
    const {classes} = this.props

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
              className={classes.search}
              margin="normal"
              value={this.state.search}
              onChange={(e) => this.setState({search: e.target.value})}
              onKeyPress={this._handleKeyPress}
            />
          </div>
        </div>
        <div>
          <Paper className={classes.paper} elevation={4}>
            <Typography type="display1" component="h3">
              Spottermart
            </Typography>
            <Typography component="p">
              Community driven asset listing
            </Typography>
          </Paper>
        </div>
      </div>
    )
  }

  _handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      console.log('search term ' + this.state.search)
    }
  }

}


export default withStyles(styles)(FrontPage);