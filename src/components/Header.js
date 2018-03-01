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
import Drawer from 'material-ui/Drawer'
import {Image} from 'cloudinary-react'
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List'
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
  },
  list: {
    width: 250,
  },
  listFull: {
    width: 'auto',
  },
  button: {
    width: '100%',
  },
}

@withStyles(styles)
class Header extends Component {

  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  }


  render() {
    const {classes} = this.props
    const userId = localStorage.getItem(GC_USER_ID)

    const fullList = (
      <div className="res-nav">
        <List component="nav">

          <ListItem button>
            <Link to='/assets'><Button className={classes.button}>For Sale</Button></Link>
          </ListItem>

          {userId &&
          <ListItem button>
            <Link to='/create'><Button className={classes.button}>New Listing</Button></Link>
          </ListItem>}

          {userId &&
          <ListItem button>
            <Link to='/myAssets'><Button className={classes.button}>my assets</Button></Link>
          </ListItem>}

          {userId &&
          <ListItem button>
            <Link to='/myMessages'><Button className={classes.button}>my messages</Button></Link>
          </ListItem>}

          {userId &&
          <ListItem button>
            <Button
              className={classes.button}
              onClick={() => {
                localStorage.removeItem(GC_USER_ID)
                localStorage.removeItem(GC_AUTH_TOKEN)
                this.props.removeUserName()
                this.props.history.push(`/`)
              }}>
              logout
            </Button>
          </ListItem>}

          {!userId &&
          <ListItem button>
            <Link to='/login'><Button className={classes.button}>login</Button></Link>
          </ListItem>}


        </List>
      </div>
    )

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

              {userId && <Link to='/myAssets'><Button color="contrast">my listings</Button></Link>}
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


              <IconButton
                onClick={this.toggleDrawer('top', true)}
                className="icon"
                color="inherit"
                aria-label="Menu">
                <MenuIcon/>
              </IconButton>

              <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
                <div
                  tabIndex={0}
                  role="button"
                  onClick={this.toggleDrawer('top', false)}
                  onKeyDown={this.toggleDrawer('top', false)}
                >
                  {fullList}
                </div>
              </Drawer>

              <div className="Logo2">
                <Image cloudName="spottermart" publicId="Logo2_qpq49e"/>
              </div>

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