import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import GridList, {GridListTile} from 'material-ui/GridList'
import {Image} from 'cloudinary-react'
import '../sass/ImageGridList.css'
import ImageModal from './ImageModal'

const styles = theme => ({
  root: {
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    paddingLeft: 15,
    paddingRight: 15,
  },
  gridList: {
    width: 170,
    height: 300,
  },
  subheader: {
    width: '100%',
  },
});

class ImageGridList extends Component {

  state = {
    showModal: false,
    publicId: '',
  }


  render() {

    const {classes} = this.props

    return (
      <div className="ImageGrid">
        <div className={classes.root}>
          <GridList cellHeight={160} className={classes.gridList} cols={1}>
            {this.props.pictures.map(tile => (
              <GridListTile key={tile.public_id} cols={1}>
                <Image data={tile.public_id} onClick={this._showModal} cloudName="spottermart" publicId={tile.public_id}
                       transformation="media_lib_thumb"/>
                <ImageModal open={this.state.showModal} publicId={this.state.publicId} handleClose={this._handleClose}/>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    )
  }

  _showModal = (e) => {
    this.setState({
      showModal: true,
      publicId:e.target.getAttribute("data")
    })

  }

  _handleClose = () => {
    this.setState({ showModal: false })
  }

}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ImageGridList)