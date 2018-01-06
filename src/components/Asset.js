import React, {Component} from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class Asset extends Component {
  render(){
    return (
      <div>
        <div>{this.props.asset.businessName} ({this.props.asset.price})</div>
      </div>
    )
  }
}

export default createFragmentContainer(Asset, graphql`
  fragment Asset_asset on Asset {
      id
      businessName
      price
  }
`)