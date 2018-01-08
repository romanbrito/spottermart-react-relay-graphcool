import React, {Component} from 'react'
import {fetchQuery} from '../Environment'

class SingleAsset extends Component {

  render() {

    return (
      <div>Single Asset Component {this.props.match.params.businessName}</div>
    )
  }
}

export default SingleAsset