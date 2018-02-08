import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card'
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button'
import {withStyles} from "material-ui/styles/index"
import {GC_USER_ID} from "../constants"
import ImageSlider from './ImageSlider'
import CreateMessage from './CreateMessage'

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
  },
  cover: {
    width: 151,
    height: 151,
  }
})

@withStyles(styles)
class DisplaySearch extends Component {

  state = {
    replyMessage:false
  }

  render() {
    const {classes} = this.props
    const userId = localStorage.getItem(GC_USER_ID)

    return (
      <div>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cover}
            image={'http://res.cloudinary.com/spottermart/image/upload/t_media_lib_thumb/v1516376737/' + this.props.hit.hit.pictures[0].public_id + '.jpg'}
            title="thumb"
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography type="headline">
                {this.props.hit.hit.businessName} posted by {this.props.hit.hit.postedBy.name}
              </Typography>
              {!this.props.showDetails &&
              <Link to={'/' + this.props.hit.hit.businessName}><Button color="primary">
                Show Details
              </Button></Link>}

              {userId !== this.props.hit.hit.postedBy.id &&
              <Button
                onClick={() => this._sendMessage(userId)}
                color="primary">
                Send Message
              </Button>}

              {this.props.userAsset &&
              <div>
                <Button
                  color="primary"
                  onClick={() => this._deleteAsset(this.props.hit.hit.id)}>
                  Delete
                </Button>
                <Link to={'/update/' + this.props.hit.hit.id}><Button color="primary">Update</Button></Link>
              </div>
              }

              {this.props.showDetails &&
              <div>
                <Typography type="subheading" color="secondary">
                  {this.props.hit.hit.price}
                </Typography>
                <Typography type="subheading" color="secondary">
                  {this.props.hit.hit.city}, {this.props.hit.hit.state}, {this.props.hit.hit.zipCode}
                </Typography>
              </div>}

              {this.state.replyMessage &&
              <CreateMessage to={this.props.hit.hit.postedBy.id} replyMessage={this._replyMessage}/>}

            </CardContent>
          </div>
        </Card>
        {this.props.showDetails &&
        <ImageSlider pictures={this.props.hit.hit.pictures}/>
        }
      </div>
    )
  }

  _sendMessage = (userId) => {
    if (!userId) {
      this.props.history.push('/login')
    } else {
      this._replyMessage()
    }
  }

  _replyMessage = () => {
    if (this.state.replyMessage) {
      this.setState({replyMessage:false})
    } else {
      this.setState({replyMessage: true})
    }
  }

}

export default DisplaySearch