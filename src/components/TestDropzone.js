import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import GridList from './TestGridList'

import {CLOUDINARY_UPLOAD_URL, CLOUDINARY_UPLOAD_PRESET} from "../constants"

class Basic extends React.Component {

  state = {
    files: [],
    uploadedFileUrl:[]
  }

  onDrop(files) {
    const filesArr = [...this.state.files]
    filesArr.push(...files)
    this.setState({
      files:filesArr
    })
  }

  removeImage = (image) => {

    this.setState({
      files:this.state.files.filter(function (file) {
        return file.preview !== image.src
      })
    })

  }

  handleImageUpload(files) {
    files.map(

      file => {
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

          const upFileUrlArr = [...this.state.uploadedFileUrl]
          upFileUrlArr.push(data.secure_url)

          this.setState({
            uploadedFileUrl: upFileUrlArr
          })
        }).catch(error => console.log(error))
      }

    )
  }

  render() {
    return (
      <section>
        {this.state.files.length > 11 ? '':
        <div className="dropzone">
          <Dropzone
            onDrop={this.onDrop.bind(this)}
          >
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
        }

        <aside>
          <h2>Grid List</h2>
          <GridList tileData={this.state.files} removeImage={this.removeImage}/>

        </aside>
        <button
          onClick={() => this.handleImageUpload(this.state.files)}>
          upload
        </button>
      </section>
    );
  }
}

export default Basic