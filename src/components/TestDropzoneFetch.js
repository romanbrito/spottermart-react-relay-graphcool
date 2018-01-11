import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
//import {GC_AUTH_TOKEN} from "../constants"

// cloudinary.config({
//   cloud_name: 'spottermart',
//   api_key: '367443589146887',
//   api_secret: 'a9sZ5OqfhHRLDshttizduOUy1B4'
//   Preset_name: 'cqpzx56r'
//
// });

const CLOUDINARY_UPLOAD_PRESET = 'react-dropzone-test'
const CLOUD_NAME = 'spottermart'
const RESOURCE_TYPE = 'image'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/' + CLOUD_NAME + '/upload';
//Image upload: https://api.cloudinary.com/v1_1/spottermart/image/upload
//Environment Variable cloudinary://367443589146887:a9sZ5OqfhHRLDshttizduOUy1B4@spottermart/

//Sample upload code
// cloudinary.uploader.upload(
//   "sample.jpg",
//   {
//     "crop":"limit",
//     "tags":"samples",
//     "width":3000,
//     "height":2000
//   }, function(result) {
//   console.log(result) });

//Sample image manipulation tag
//cloudinary.image("sample", {"crop":"fill","gravity":"faces","width":300,"height":200,"format":"jpg"});

class Basic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedFile: null,
      uploadedFileCloudinaryUrl: ''
    };
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {

    // let upload = request.post(CLOUDINARY_UPLOAD_URL)
    //   .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    //   .field('file', file);
    //
    // upload.end((err, response) => {
    //   if (err) {
    //     console.error(err);
    //   }
    //
    //   if (response.body.secure_url !== '') {
    //     this.setState({
    //       uploadedFileCloudinaryUrl: response.body.secure_url
    //     });
    //   }
    // });

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