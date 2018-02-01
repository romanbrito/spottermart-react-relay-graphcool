import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import {withStyles} from 'material-ui/styles'
import IconButton from 'material-ui/IconButton'
import AddAPhoto from 'material-ui-icons/AddAPhoto'

const styles = {
  imageDrop: {
    borderStyle: 'ridge',
    width: '50%',
    height: 200
  }
}

@withStyles(styles)
export default class AssetImages extends Component {

  onDrop(images) {
    // when image is dropped
    this.props.imageDrop(images)
  }

  render() {
    const {classes} = this.props

    return (
      <section>
        <div className="dropzone">
          <Dropzone
            onDrop={this.onDrop.bind(this)}
            className={classes.imageDrop}>
            <IconButton><AddAPhoto/></IconButton>

          </Dropzone>
        </div>
      </section>
    )
  }
}
