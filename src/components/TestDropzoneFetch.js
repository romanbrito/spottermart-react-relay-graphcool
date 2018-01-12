import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import {CLOUDINARY_UPLOAD_URL} from "../constants"

class Basic extends Component {

    state = {
      uploadedFile: null,
      uploadedFileCloudinaryUrl: ''
    }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    })

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    const fd = new FormData()
    fd.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    fd.append('file', file)

    fetch(CLOUDINARY_UPLOAD_URL, {
      method: 'POST',
      body: fd,
    }).then(response => {
      return response.json()
    }).then(data => {
      console.log(data)
      this.setState({
        uploadedFileCloudinaryUrl: data.body.secure_url
      })
    }).catch(error => console.log(error))

  }

  render() {
    return (
      <form>
        <div className="FileUpload">
          <Dropzone
            onDrop={this.onImageDrop.bind(this)}
            multiple={false}
            accept="image/*">
            <div>Drop an image or click to select a file to upload.</div>
          </Dropzone>
        </div>

        <div>
          {this.state.uploadedFileCloudinaryUrl === '' ? null :
            <div>
              <p>{this.state.uploadedFile.name}</p>
              <img src={this.state.uploadedFileCloudinaryUrl} />
            </div>}
        </div>
      </form>
    )
  }
}

export default Basic