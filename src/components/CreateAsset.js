import React,{Component} from 'react'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Input from 'material-ui/Input'
import CreateAssetMutation from '../mutations/CreateAssetMutation'
import {NumberFormatCustom} from "./FormatedInputs"
import {GC_USER_ID} from "../constants"

const styles = {
  textField:{
    width: 200,
  }
}

@withStyles(styles)
class CreateAsset extends Component {

  state = {
    businessName: '',
    price: ''
  }

  render() {
    const { classes } = this.props

    return(
      <div>
        <TextField
          required
          id="required"
          label="Name"
          className={classes.textField}
          margin="normal"
          value={this.state.businessName}
          onChange={(e) => this.setState({ businessName: e.target.value })}
        />
        <Input
          id="price"
          label="Price"
          inputComponent={NumberFormatCustom}
          className={classes.textField}
          value={this.state.price}
          onChange={(e) => this.setState({ price: e.target.value })}
        />
        <Button
          color="primary"
          onClick={() => this._createAsset()}>
          Submit
        </Button>
      </div>
    )
  }

  _createAsset = () => {
    const postedById = localStorage.getItem(GC_USER_ID)
    if (!postedById) {
      console.error('No user logged in')
      return
    }
    const {businessName, price} = this.state
    CreateAssetMutation(postedById, businessName, price ,() => this.props.history.push('/'))
  }

}

export default CreateAsset