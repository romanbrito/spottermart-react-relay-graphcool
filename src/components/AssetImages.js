import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import {withStyles} from 'material-ui/styles'

const styles = {
  imageDrop: {
    borderStyle: 'ridge',
    width: '100%',
    height: 200
  }
}

@withStyles(styles)
export default class AssetImages extends Component {

  onDrop(images) {
    // when image is dropped
    this.props.imageDrop(images)
    console.log(images)
  }

  render() {
    const {classes} = this.props

    return (
      <section>
        <div className="dropzone">
          <Dropzone
            onDrop={this.onDrop.bind(this)}
            className={classes.imageDrop}>
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
      </section>
    )
  }
}
