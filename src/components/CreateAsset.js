import React,{Component} from 'react'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Input from 'material-ui/Input'
import CreateAssetMutation from '../mutations/CreateAssetMutation'
import {NumberFormatCustom} from "./FormatedInputs"
import {GC_USER_ID} from "../constants"
import AssetImages from './AssetImages'
import ImageGrid from './ImageGrid'

const styles = {
  textField:{
    width: 200,
  }
}

@withStyles(styles)
class CreateAsset extends Component {

  state = {
    businessName: '',
    price: '',
    description: '',
    city: '',
    state: '',
    zipCode: '',
    pictures: '',
    images: []
  }

  render() {
    const { classes } = this.props

    return(
      <div>
        <TextField
          required
          id="businessname"
          label="Name"
          className={classes.textField}
          margin="normal"
          value={this.state.businessName}
          onChange={(e) => this.setState({ businessName: e.target.value })}
        />
        <TextField
          required
          id="description"
          label="Description"
          className={classes.textField}
          margin="normal"
          value={this.state.description}
          onChange={(e) => this.setState({ description: e.target.value })}
        />
        <TextField
          required
          id="city"
          label="City"
          className={classes.textField}
          margin="normal"
          value={this.state.city}
          onChange={(e) => this.setState({ city: e.target.value })}
        />
        <TextField
          required
          id="state"
          label="State"
          className={classes.textField}
          margin="normal"
          value={this.state.state}
          onChange={(e) => this.setState({ state: e.target.value })}
        />
        <TextField
          required
          id="zipCode"
          label="ZipCode"
          className={classes.textField}
          margin="normal"
          value={this.state.zipCode}
          onChange={(e) => this.setState({ zipCode: e.target.value })}
        />
        <Input
          id="price"
          label="Price"
          inputComponent={NumberFormatCustom}
          className={classes.textField}
          value={this.state.price}
          onChange={(e) => this.setState({ price: e.target.value })}
        />
        <AssetImages imageDrop={this._getImages}/>
        <ImageGrid images={this.state.images} removeImage={this._removeImage}/>
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
    const {
      businessName,
      price,
      description,
      city,
      state,
      zipCode} = this.state

    CreateAssetMutation(
      postedById,
      businessName,
      price,
      description,
      city,
      state,
      zipCode
      ,() => this.props.history.push('/'))
  }

  _getImages = (images) => {
    const imagesArr = [...this.state.images]
    imagesArr.push(...images)
    this.setState({
      images:imagesArr
    })
  }

  _removeImage = (image) => {
    this.setState({
      images:this.state.images.filter(pic => pic.preview !== image.src)
    })
  }

}

export default CreateAsset