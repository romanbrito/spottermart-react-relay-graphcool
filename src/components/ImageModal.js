import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Modal from 'material-ui/Modal'
import {Image} from 'cloudinary-react'
import Button from 'material-ui/Button'

const styles = theme => ({
  modal: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  image: {
    width: "100%"
  }
})

class ImageModal extends Component {

  render() {
    const {classes} = this.props

    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.open}
        onClose={this.props.handleClose}
        className={classes.modal}
      >
        <Image className={classes.image} cloudName="spottermart" publicId={this.props.publicId} width={window.innerWidth} crop="scale"/>
      </Modal>
    )

  }
}

export default withStyles(styles)(ImageModal)