import React, {Component} from 'react'
import '../sass/SlideShow.css'
import {withStyles} from "material-ui/styles/index"
import {Image} from 'cloudinary-react'
import Button from 'material-ui/Button'

const styles = {}

class SlideShow extends Component {

  state = {
    index: 0,
  }

  render() {
    const {classes} = this.props

    return (
      <div className="SlideShow">
        {console.log(this.props.pictures[0].public_id)}


        <div>
          <Image cloudName="spottermart" publicId={this.props.pictures[this.state.index].public_id} width="300"
                    crop="scale"/>
        </div>


        <Button
          onClick={() => this._nextImage()}>
          Next
        </Button>

      </div>
    )

  }

  _nextImage = () => {
    const index = this.state.index + 1

    if (index < this.props.pictures.length) {

      this.setState({
        index
      })

    } else {
      this.setState({
        index: 0
      })
    }

  }


}

export default withStyles(styles)(SlideShow)