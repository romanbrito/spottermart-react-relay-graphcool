import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button'
import {Link} from 'react-router-dom'

import FrontPageInfo from './FrontPageInfo'

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
  listings: {
    margin: 'auto',
    width: '50%'
  },
  container: {
    height: '60vh',
  },

});

class FrontPage extends Component {

  state = {
    search: ''
  }


  render() {
    const {classes} = this.props

    return (
      <div  className={classes.container}>
        <div className={classes.listings}>
          <div className={classes.row}>
            <div className={classes.search}>
              <Link to='/assets'><Typography type='display2' align='center'>Find Listings</Typography></Link>
            </div>
          </div>
        </div>

        <FrontPageInfo/>

      </div>
    )
  }

}


export default withStyles(styles)(FrontPage)