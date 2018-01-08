import React, {Component} from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card'
import Typography from 'material-ui/Typography';
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
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography type="headline">
                {this.props.asset.businessName}
              </Typography>
              <Typography type="subheading" color="secondary">
                {this.props.asset.price}
              </Typography>
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
  }
`)