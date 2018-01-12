import React, {Component} from 'react'
import Dropzone from 'react-dropzone'

export default class AssetImages extends Component {

  onDrop(images) {
    // when image is dropped
    this.props.imageDrop(images)
    console.log(images)
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone
            onDrop={this.onDrop.bind(this)}>
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
      </section>
    )
  }
}
