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
import {GC_USER_ID} from "../constants"
import ImageSlider from './ImageSlider'
import ImageGridList from './ImageGridList'
import DeleteAssetMutation from "../mutations/DeleteAssetMutation"
import CreateMessage from './CreateMessage'

const styles = theme => ({
  card: {
    // display: 'flex',
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
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  }
})

@withStyles(styles)
class Asset extends Component {

  state = {
    replyMessage:false
  }

  render() {
    const {classes} = this.props
    const userId = localStorage.getItem(GC_USER_ID)

    return (
      <div className={classes.container}>
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
              </div>}

              {this.state.replyMessage &&
              <CreateMessage to={this.props.asset.postedBy.id} replyMessage={this._replyMessage}/>}

            </CardContent>
          </div>
        </Card>
        {this.props.showDetails &&
        <ImageGridList pictures={this.props.asset.pictures}/>
        }
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
    }
`)