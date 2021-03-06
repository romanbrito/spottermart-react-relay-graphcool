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
import '../sass/Asset.css'
import {GC_USER_ID} from "../constants"
// import ImageSlider from './ImageSlider'
import SlideShow from './SlideShow'
import ImageGridList from './ImageGridList'
import DeleteAssetMutation from "../mutations/DeleteAssetMutation"
import CreateMessage from './CreateMessage'

const styles = theme => ({
  card: {
    // width: '80%'
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
  },
})

@withStyles(styles)
class Asset extends Component {

  state = {
    replyMessage:false
  }

  render() {
    const {classes} = this.props
    const userId = localStorage.getItem(GC_USER_ID)

    console.log(this.props.asset)

    return (
      <div className="assetContainer">

        {this.props.showDetails &&
        <ImageGridList pictures={this.props.asset.pictures}/>
        }
        {this.props.showDetails &&
        <SlideShow pictures={this.props.asset.pictures}/>
        }

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
              {(userId !== this.props.asset.postedBy.id) &&
              <Button
              onClick={() => this._replyMessage()}
                color="primary">
                Send Message
              </Button>}

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

                <Typography type="body2" color="secondary">
                  Equipment
                </Typography>

                {this.props.asset.equipment.map((item,idx) =>
                  <Typography key={idx} type="subheading" color="secondary">
                    {item && item.name}
                  </Typography>
                )}

              </div>}

              {this.state.replyMessage &&
              <CreateMessage to={this.props.asset.postedBy.id} replyMessage={this._replyMessage}/>}

            </CardContent>
          </div>
        </Card>
      </div>
    )
  }

  _replyMessage = () => {
    if (this.state.replyMessage) {
      this.setState({replyMessage:false})
    } else {
      this.setState({replyMessage: true})
    }
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
        equipment
        socialMedia
    }
`)