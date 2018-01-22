import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card'
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button'
import {withStyles} from "material-ui/styles/index"
import ImageSlider from './ImageSlider'
import DeleteAssetMutation from "../mutations/DeleteAssetMutation"

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

  render() {
    const {classes} = this.props

    return (
      <div>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography type="headline">
                {this.props.asset.businessName} posted by {this.props.asset.postedBy.name}
              </Typography>
              <Link to={'/createMessage/' + this.props.asset.postedBy.id}><Button color="primary">Send Message</Button></Link>

              {!this.props.showDetails &&
              <Link to={'/' + this.props.asset.businessName}><Button color="primary">
                Show Details
              </Button></Link>}

              {this.props.userAsset &&
                <div>
                  <Button
                    color="primary"
                    onClick={() => this._deleteAsset(this.props.asset.id)}>
                    Delete
                  </Button>
                  <Link to={'/update/' + this.props.asset.id}><Button color="primary">Update</Button></Link>
                </div>
              }

              {this.props.showDetails &&
              <div>
                <Typography type="subheading" color="secondary">
                  {this.props.asset.price}
                </Typography>
                <Typography type="subheading" color="secondary">
                  {this.props.asset.city}, {this.props.asset.state}, {this.props.asset.zipCode}
                </Typography>
              </div>}

            </CardContent>
          </div>
        </Card>
        {this.props.showDetails &&
        <ImageSlider pictures={this.props.asset.pictures}/>
        }
      </div>
    )
  }

  _deleteAsset = (assetId) => {
    DeleteAssetMutation(
      assetId,
      () => this.props.history.push('/')
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
        postedBy {
            id
            name
        }
    }
`)