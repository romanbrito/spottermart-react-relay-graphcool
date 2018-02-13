import React from 'react'
import '../sass/SlideShow.css'
import {withStyles} from "material-ui/styles/index"
import {Image} from 'cloudinary-react'

const styles = {

}

const SlideShow  = (props) => {

  return (
    <div className="SlideShow">

      {props.pictures.map(picture => (
        <div key={picture.public_id}><Image cloudName="spottermart" publicId={picture.public_id} width="300"
                                            crop="scale"/></div>
      ))}

    </div>
  )

}

export default withStyles(styles)(SlideShow)