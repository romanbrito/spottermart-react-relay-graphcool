import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import {withStyles} from "material-ui/styles/index"
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import '../sass/Header.css'

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

@withStyles(styles)
class Header extends Component {

  render(){
    const { classes } = this.props

    return(
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to='/'><Button color="contrast">New</Button></Link>
          <Typography type="title" color="inherit" className={classes.flex}>
            Title
          </Typography>
          <Link to='/create'><Button color="contrast">Submit</Button></Link>
        </Toolbar>
      </AppBar>
      </div>
    )
  }
}

export default withRouter(Header)