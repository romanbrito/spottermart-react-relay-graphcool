import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

const styles = theme => ({
  marginLeft: theme.spacing.unit,
  marginRight: theme.spacing.unit,
  width: 200,
})

@withStyles(styles)
class CreateMessage extends Component{

  state = {
    message:''
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  }

  render() {
    const {classes} = this.props

    return (
      <div>
        <TextField
          id="message"
          label="Message"
          multiline
          rowsMax="4"
          value={this.state.message}
          onChange={this.handleChange('message')}
          className={classes.textField}
          margin="normal"
        />
        <Button
          color="primary"
          onClick={() => this._createMessage()}>
          Submit
        </Button>
      </div>
    )
  }

  _createMessage = () => {
  console.log(this.state.message)
  }

}

export  default CreateMessage