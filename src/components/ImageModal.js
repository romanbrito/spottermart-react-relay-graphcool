import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Modal from 'material-ui/Modal'
import {Image} from 'cloudinary-react'
import Button from 'material-ui/Button'

class ImageModal extends Component {

  render() {

    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.open}
        onClose={this.props.handleClose}
      >
        <Image cloudName="spottermart" publicId={this.props.publicId} width={window.innerWidth - 150} crop="scale"/>
      </Modal>
    )

  }
}

export default ImageModal