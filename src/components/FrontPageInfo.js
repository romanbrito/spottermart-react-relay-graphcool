import React from 'react'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

const styles = {
  paper: {
    marginTop: '25vh',
    height: '17vh',
    textAlign: 'center',
    paddingTop: '3vh'
  }
}

const FrontPageInfo = (props) => {
  const {classes} = props

  return (
    <div>
      <Paper className={classes.paper} elevation={4}>
        <Typography type="display1" component="h3">
          Spottermart
        </Typography>
        <Typography component="p">
          Community driven asset listing
        </Typography>
      </Paper>
    </div>
  )

}

export default withStyles(styles)(FrontPageInfo)