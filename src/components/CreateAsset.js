import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Input, {InputLabel, InputAdornment} from 'material-ui/Input'
import {FormControl, FormHelperText} from 'material-ui/Form'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import CreateAssetMutation from '../mutations/CreateAssetMutation'
import ImageGrid from './ImageGrid'
import {NumberFormatCustom} from "./FormatedInputs"
import {GC_USER_ID} from "../constants"
import {uploadImage} from "../utils"
import EquipmentList from './EquipmentList'
import SocialMediaList from './SocialMediaList'

const q = (x) => {
  if (x.matches) {
    return '100%'
  }
}

const x = window.matchMedia("(max-width: 700px)")
x.addListener(q)

const styles = theme => ({
  listing: {
    margin: '0 auto',
    width: '80%',
  },
  formGroup: {
    '& ul': {
      listStyle: 'none'
    }
  },
  formImage: {
    '& ul': {
      listStyle: 'none'
    },
    width: q(window.matchMedia("(max-width: 700px)"))
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formFields: {

  },
  formSubmit: {
    flex: '0 0 100%'
  }

})

@withStyles(styles)
class CreateAsset extends Component {

  state = {
    businessName: '',
    price: '',
    description: '',
    city: '',
    state: '',
    zipCode: '',
    pictures: [],
    images: [],
    equipment: [{name: ''}],
    socialMedia: [{name: ''}],
  }

  render() {
    const {classes} = this.props

    return (
      <div className={classes.listing}>
        <header>
          <Typography type="display1" className={classes.heading}>
            Listing Details
          </Typography>
        </header>

        <div className={classes.form}>
          <section className={classes.formGroup}>
            <ul className={classes.formFields}>
              <li>
                <TextField
                  required
                  id="businessname"
                  label="Name"
                  className={classes.textField}
                  margin="normal"
                  value={this.state.businessName}
                  onChange={(e) => this.setState({businessName: e.target.value})}
                />
              </li>
              <li>
                <FormControl>
                  <InputLabel htmlFor="price">Price</InputLabel>
                  <Input
                    id="price"
                    className={classes.textField}
                    inputComponent={NumberFormatCustom}
                    value={this.state.price}
                    onChange={(e) => this.setState({price: e.target.value})}
                  />
                </FormControl>
              </li>
              <li>
                <TextField
                  required
                  id="city"
                  label="City"
                  className={classes.textField}
                  margin="normal"
                  value={this.state.city}
                  onChange={(e) => this.setState({city: e.target.value})}
                />
              </li>
              <li>
                <TextField
                  required
                  id="state"
                  label="State"
                  className={classes.textField}
                  margin="normal"
                  value={this.state.state}
                  onChange={(e) => this.setState({state: e.target.value})}
                />
              </li>
              <li>
                <TextField
                  required
                  id="zipCode"
                  label="ZipCode"
                  className={classes.zipCode}
                  margin="normal"
                  value={this.state.zipCode}
                  onChange={(e) => this.setState({zipCode: e.target.value})}
                />
              </li>
            </ul>
          </section>
          <section className={classes.formGroup}>
            <ul className={classes.formFields}>
              <li>
                <TextField
                  required
                  id="description"
                  label="Description"
                  multiline
                  className={classes.description}
                  margin="normal"
                  value={this.state.description}
                  onChange={(e) => this.setState({description: e.target.value})}
                />
              </li>
              <li>
                <SocialMediaList
                  handleSocialNameChange={this._handleSocialNameChange}
                  handleAddSocialItem={this._handleAddSocialItem}
                  handleRemoveSocialItem={this._handleRemoveSocialItem}
                  socialMedia={this.state.socialMedia}
                />
              </li>
              <li>
                <EquipmentList
                  handleEquipmentNameChange={this._handleEquipmentNameChange}
                  handleAddItem={this._handleAddItem}
                  handleRemoveItem={this._handleRemoveItem}
                  equipment={this.state.equipment}
                />
              </li>

            </ul>
          </section>
          <section className={classes.formImage}>
            <ul className={classes.formFields}>
              <li>
                <ImageGrid imageDrop={this._getImages} images={this.state.images} removeImage={this._removeImage}/>
              </li>
            </ul>
          </section>
          <section className={classes.formSubmit}>
            <Button
              color="primary"
              className={classes.submit}
              onClick={() => this._createAsset()}>
              Submit
            </Button>
          </section>

        </div>
      </div>
    )
  }

  _createAsset = () => {

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
      pictures => {
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
          zipCode,
          equipment,
          socialMedia,
        } = this.state

        CreateAssetMutation(
          postedById,
          businessName,
          price,
          description,
          city,
          state,
          zipCode,
          pictures,
          equipment,
          socialMedia
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

  _removeImage = (image) => {
    this.setState({
      images: this.state.images.filter(pic => pic.preview !== image.src)
    })
  }

  _handleEquipmentNameChange = (idx) => (evt) => {
    const newEquipment = this.state.equipment.map((equipment, sidx) => {
      if (idx !== sidx) return equipment
      return { ...equipment, name: evt.target.value }
    });

    this.setState({ equipment: newEquipment })
  }

  _handleAddItem = () => {
    this.setState({ equipment: this.state.equipment.concat([{ name: '' }]) })
  }

  _handleRemoveItem = (idx) => () => {
    this.setState({ equipment: this.state.equipment.filter((s, sidx) => idx !== sidx) })
  }

  _handleSocialNameChange = (idx) => (evt) => {
    const newSocial = this.state.socialMedia.map((social, sidx) => {
      if (idx !== sidx) return social
      return { ...social, name: evt.target.value }
    });

    this.setState({ socialMedia: newSocial })
  }

  _handleAddSocialItem = () => {
    this.setState({ socialMedia: this.state.socialMedia.concat([{ name: '' }]) })
  }

  _handleRemoveSocialItem = (idx) => () => {
    this.setState({ socialMedia: this.state.socialMedia.filter((s, sidx) => idx !== sidx) })
  }
}

export default CreateAsset