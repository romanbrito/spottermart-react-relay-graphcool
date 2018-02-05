import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import {withStyles} from "material-ui/styles/index"
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Typography from 'material-ui/Typography'
import {Image} from 'cloudinary-react'
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
  header: {
    backgroundColor: '#f09859',
    boxShadow: 'none'
  }
}

@withStyles(styles)
class Header extends Component {

  render() {
    const {classes} = this.props
    const userId = localStorage.getItem(GC_USER_ID)

    return (
      <div className={classes.root}>
        <div className="topnav">
          <AppBar position="static" className={classes.header}>
            <Toolbar>
              <Link to='/'><Image cloudName="spottermart" publicId="Logo_zk4at5"/></Link>

              <Link to='/assets'><Button color="contrast">For Sale</Button></Link>

              {userId &&
              <Link to='/create'><Button color="contrast">New Listing</Button></Link>
              }

              {userId && <Link to='/myAssets'><Button color="contrast">my assets</Button></Link>}
              {userId && <Link to='/myMessages'><Button color="contrast">my messages</Button></Link>}

              {userId && <Button color="contrast"
                                 className="hide-res"
                                 onClick={() => {
                                   localStorage.removeItem(GC_USER_ID)
                                   localStorage.removeItem(GC_AUTH_TOKEN)
                                   this.props.removeUserName()
                                   this.props.history.push(`/`)
                                 }}>
                logout
              </Button>}

              {!userId && <Link to='/login'><Button color="contrast">login</Button></Link>}

              <IconButton className="icon" color="inherit" aria-label="Menu">
                <MenuIcon/>
              </IconButton>

            </Toolbar>
          </AppBar>
        </div>

        <Typography type="title" color="inherit" className={classes.flex}>
          {userId && 'Hello ' + this.props.userName}
        </Typography>

      </div>
    )
  }

}

export default withRouter(Header)