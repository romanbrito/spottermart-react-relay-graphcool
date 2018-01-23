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
import CreateMessage from "./CreateMessage"
import DeleteMessageMutation from "../mutations/DeleteMessageMutation";

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
class Message extends Component {
  state = {
    replyMessage: false
  }

  render() {
    const {classes} = this.props

    return (
      <div>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography>
                {this.props.message.text} from {this.props.message.from.name} with id {this.props.message.from.id}
              </Typography>
            </CardContent>
            <div>
              <Button
                onClick={() => this._replyMessage()}
                color="primary">
                Reply
              </Button>
              {this.state.replyMessage && <CreateMessage to={this.props.message.from.id} replyMessage={this._replyMessage}/>}
              <Button
                onClick={() => this._deleteMessage(this.props.message.id)}
                color="primary">
                Delete
              </Button>
            </div>
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

  _deleteMessage = (messageId) => {
    DeleteMessageMutation(
      messageId,
      () => console.log(this.props)
    )
  }
}

export default createFragmentContainer(Message, graphql`
  fragment Message_message on Message {
      id
      text
      from {
          id
          name
      }
  }
`)