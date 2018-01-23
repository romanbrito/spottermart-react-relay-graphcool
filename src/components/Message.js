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
          </div>
        </Card>
      </div>
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