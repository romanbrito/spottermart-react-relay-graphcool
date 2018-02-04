import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card'
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button'
import {withStyles} from "material-ui/styles/index"
import {GC_USER_ID} from "../constants"
import ImageSlider from './ImageSlider'
import DeleteAssetMutation from "../mutations/DeleteAssetMutation"
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
  }
})

@withStyles(styles)
class DisplaySearch extends Component {

  render() {
    const {classes} = this.props

    return (
      <div>
        <Card className={classes.card}>
          <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography type="headline">
            {this.props.hit.name}
          </Typography>
        </CardContent>
          </div>
        </Card>
      </div>
    )
  }

}

export default DisplaySearch