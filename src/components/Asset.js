import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card'
import { CloudinaryContext, Image, Transformation, Video } from 'cloudinary-react';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button'
import {withStyles} from "material-ui/styles/index"

const styles = theme => ({
  card: {
    display: 'flex',
    //maxWidth: 345,
  },
  media: {
    width: 151,
    height: 151,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  title: {
    marginBottom: 32,
    fontSize: 20,
    color: theme.palette.text.secondary,
  }
})

@withStyles(styles)
class Asset extends Component {

render(){
  const {classes} = this.props

    return (
      <div>
        {console.log(this.props.asset)}
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography type="headline">
                {this.props.asset.businessName}
              </Typography>
              {!this.props.showDetails &&
              <Link to={'/' + this.props.asset.businessName}><Button color="primary">
                Show Details
              </Button></Link>}
              {this.props.showDetails &&
              <div>
                <Typography type="subheading" color="secondary">
                  {this.props.asset.price}
                </Typography>
                <Typography type="subheading" color="secondary">
                  {this.props.asset.city}, {this.props.asset.state}, {this.props.asset.zipCode}
                </Typography>
                {console.log(this.props.asset.pictures[0])}
                {this.props.asset.pictures.map(picture => (
                  <Image key={picture.public_id} cloudName="spottermart" publicId={picture.public_id} width="300" crop="scale"/>
                ))}
              </div>}

            </CardContent>
          </div>
        </Card>
      </div>
    )
  }
}

export default createFragmentContainer(Asset, graphql`
  fragment Asset_asset on Asset {
      id
      businessName
      price
      description
      city
      state
      zipCode
      pictures
  }
`)