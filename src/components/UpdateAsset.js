import React, {Component} from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'
import {withStyles} from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input'
import { FormControl, FormHelperText } from 'material-ui/Form'
import UpdateAssetMutation from '../mutations/UpdateAssetMutation'
import {NumberFormatCustom} from "./FormatedInputs"
import {GC_USER_ID} from "../constants"
import {uploadImage} from "../utils"
import UpdateImageGrid from './UpdateImageGrid'
import ImageGrid from './ImageGrid'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

@withStyles(styles)
class UpdateAsset extends Component {

  state = {
    id: this.props.asset.id,
    businessName: this.props.asset.businessName,
    price: this.props.asset.price,
    description: this.props.asset.description,
    city: this.props.asset.city,
    state: this.props.asset.state,
    zipCode: this.props.asset.zipCode,
    pictures: this.props.asset.pictures,
    images: []
  }

  render () {
    const {classes} = this.props

    return (
      <div>
        <TextField
          required
          id="businessname"
          label="Name"
          className={classes.textField}
          margin="normal"
          value={this.state.businessName}
          onChange={(e) => this.setState({businessName: e.target.value})}
        />
        <TextField
          required
          id="description"
          label="Description"
          className={classes.textField}
          margin="normal"
          value={this.state.description}
          onChange={(e) => this.setState({description: e.target.value})}
        />
        <TextField
          required
          id="city"
          label="City"
          className={classes.textField}
          margin="normal"
          value={this.state.city}
          onChange={(e) => this.setState({city: e.target.value})}
        />
        <TextField
          required
          id="state"
          label="State"
          className={classes.textField}
          margin="normal"
          value={this.state.state}
          onChange={(e) => this.setState({state: e.target.value})}
        />
        <TextField
          required
          id="zipCode"
          label="ZipCode"
          className={classes.textField}
          margin="normal"
          value={this.state.zipCode}
          onChange={(e) => this.setState({zipCode: e.target.value})}
        />
        <FormControl>
          <InputLabel htmlFor="price">Price</InputLabel>
          <Input
            id="price"
            inputComponent={NumberFormatCustom}
            value={this.state.price}
            onChange={(e) => this.setState({price: e.target.value})}
          />
        </FormControl>
        <ImageGrid imageDrop={this._getImages} images={this.state.images} removeImage={this._removeImage}/>
        <UpdateImageGrid pictures={this.state.pictures} removePicture={this._removePicture} updateImage={true}/>
        <Button
          color="primary"
          onClick={() => this._updateAsset()}>
          Update
        </Button>
      </div>
    )
  }

  _updateAsset = () => {
    // fetch image data PROMISES!!
    const allPicData = () => {
      const imagePromises = this.state.images.map(
        image => {
          return uploadImage(image)
        }
      )
      return Promise.all(imagePromises)
    }

    allPicData().then(
      pics => {
        const postedById = localStorage.getItem(GC_USER_ID)
        const pictures = [...pics, ...this.state.pictures] //merging new and old images

        if (!postedById) {
          console.error('No user logged in')
          return
        }
        const {
          id,
          businessName,
          price,
          description,
          city,
          state,
          zipCode
        } = this.state

        UpdateAssetMutation(
          id,
          businessName,
          price,
          description,
          city,
          state,
          zipCode,
          pictures
          , () => this.props.history.push('/'))
      }
    )

  }

  _getImages = (images) => {
    const imagesArr = [...this.state.images]
    imagesArr.push(...images)
    this.setState({
      images: imagesArr
    })
  }

  _removePicture = (image) => {
    this.setState({
      pictures: this.state.pictures.filter(pic => pic.secure_url !== image.src)
    })
  }

  _removeImage = (image) => {
    this.setState({
      images: this.state.images.filter(pic => pic.preview !== image.src)
    })
  }}

export default createFragmentContainer(UpdateAsset, graphql`
  fragment UpdateAsset_asset on Asset {
      id
      businessName
      price
      description
      city
      state
      zipCode
      pictures
  }
`)