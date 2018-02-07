import React from 'react'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList'
import { Image } from 'cloudinary-react'

const styles = theme => ( {
  paper: {
    marginTop: '50vh',
    height: '10vh',
    textAlign: 'center',
    paddingTop: '3vh',
    backgroundColor: '#fafafa',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#fafafa',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  frontPageInfo: {
    marginBottom: '10vh',
  },
  info: {
    marginTop: '10vh',
  },
  infoImage: {
    width: '100%'
  },
  footer: {
    backgroundColor:'#222',
    width: '100%'
  },
  nav: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  left: {
    float: 'left',
  },
  right: {
    float: 'right',
  },
  clear: {
    clear: 'both'
  }

})

const FrontPageInfo = (props) => {
  const {classes} = props

  return (
    <div className={classes.frontPageInfo}>
      <Paper className={classes.paper} elevation={4}>
        <Typography type="display1" component="h3">
          Featured Listings
        </Typography>
      </Paper>
      <div className={classes.root}>
      <GridList className={classes.gridList} cols={3}>
        <GridListTile>
          <Image cloudName="spottermart" publicId="counter" width="300" height="200" crop="scale"/>
        </GridListTile>
        <GridListTile>
          <Image cloudName="spottermart" publicId="restaurant" width="300" height="200" crop="scale"/>
        </GridListTile>
        <GridListTile>
          <Image cloudName="spottermart" publicId="cafe" width="300" height="200" crop="scale"/>
        </GridListTile>
      </GridList>
      </div>

      <div className={classes.info}>
        <Image className={classes.infoImage} cloudName="spottermart" publicId="info_u9iti2"/>

        <footer className={classes.footer}>
          <div>
            <div className={classes.clear}>
              <div className={classes.left}>
                <ul className={classes.nav}>
                  <li>
                    <a href="">List 1</a>
                  </li>
                </ul>
              </div>
              <div className={classes.right}>
                <ul className={classes.nav}>
                  <li>
                    <a href="">List 2</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>

    </div>
  )

}

export default withStyles(styles)(FrontPageInfo)