import React, {Component} from 'react'

class Asset extends Component {
  render(){
    return (
      <div>
        <div>{this.props.asset.businessName} ({this.props.asset.price})</div>
      </div>
    )
  }
}

export default Asset