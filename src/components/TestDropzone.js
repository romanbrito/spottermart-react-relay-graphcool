import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import GridList from './TestGridList'

class Basic extends React.Component {

  state = {
    files: []
  }

  onDrop(files) {
    const filesArr = [...this.state.files]
    filesArr.push(...files)
    this.setState({
      files:filesArr
    })
  }

  removeImage = (e) => {

    this.setState({
      files:this.state.files.filter(function (file) {
        console.log(file.preview)
        return file.preview !== e.target.src
      })
    })

  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone
            onDrop={this.onDrop.bind(this)}
          >
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
        <aside>
          <h2>Grid List</h2>

          <GridList tileData={this.state.files} removeImage={this.removeImage}/>

        </aside>
      </section>
    );
  }
}

export default Basic