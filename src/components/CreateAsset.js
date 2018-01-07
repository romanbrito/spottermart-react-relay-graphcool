import React,{Component} from 'react'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

const styles = {
  textField:{
    width: 200,
  }
}

@withStyles(styles)
class CreateAsset extends Component {

  state = {
    businessName: 'Business Name',
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
        <TextField
          id="price"
          label="Price"
          className={classes.textField}
          margin="normal"
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
    const {businessName, price} = this.state
    console.log('name ' + businessName + ', price ' + price)
  }

}

export default CreateAsset