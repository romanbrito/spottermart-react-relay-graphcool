import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import {withStyles} from "material-ui/styles/index"
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import '../sass/Header.css'
import {GC_USER_ID, GC_AUTH_TOKEN} from "../constants"

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

  render() {
    const {classes} = this.props
    const userId = localStorage.getItem(GC_USER_ID)

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link to='/assets'><Button color="contrast">New</Button></Link>
            <Typography type="title" color="inherit" className={classes.flex}>
              {userId && 'Hello ' + this.props.userName}
            </Typography>
            <Typography type="title" color="inherit" className={classes.flex}>
              Spottermart
            </Typography>
            {userId &&
            <Link to='/create'><Button color="contrast">Submit</Button></Link>
            }
            {userId ?
              <div>
                <Button color="contrast"
                        onClick={() => {
                          localStorage.removeItem(GC_USER_ID)
                          localStorage.removeItem(GC_AUTH_TOKEN)
                          this.props.removeUserName()
                          this.props.history.push(`/`)
                        }}>
                  logout
                </Button>
                <Link to='/myAssets'><Button color="contrast">my assets</Button></Link>
                <Link to='/myMessages'><Button color="contrast">my messages</Button></Link>
              </div>
              :
              <Link to='/login'><Button color="contrast">login</Button></Link>
            }
          </Toolbar>
        </AppBar>
      </div>
    )
  }

}

export default withRouter(Header)