import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import {GC_USER_ID} from "../constants"

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

    const fromId = localStorage.getItem(GC_USER_ID)

    const {
      text
    } = this.state

  console.log(this.state.message)
  }

}

export  default CreateMessage