import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles'
import {Image} from 'cloudinary-react'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import {Link} from 'react-router-dom'

import FrontPageInfo from './FrontPageInfo'

const styles = theme => ({
  banner: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    display: 'block',
  },
  listings: {
    position: 'absolute',
    fontSize: '3vw',
    fontWeight: 400,
    color: 'rgba(0,0,0,0.54)',
    padding: '1em',
    backgroundColor: '#fbfbfb',
    borderRadius: 5,
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
        <div className={classes.banner}>
          <Link to='/assets' className={classes.listings}>Find Listings</Link>
          <Image className={classes.bannerImage} cloudName="spottermart" publicId="MainBGlong_dwkqvv.jpg"/>
        </div>
        <FrontPageInfo/>
      </div>
    )
  }

}


export default withStyles(styles)(FrontPage)