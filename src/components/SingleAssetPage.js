import React, { Component } from 'react'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from "../Environment"
import Asset from './Asset'

const AssetPageQuery = graphql`
  query SingleAssetPageQuery ($businessName: String!) {
      viewer {
          Asset(businessName:$businessName) {
              ...Asset_asset
          }
      }
  }
`
class SingleAssetPage extends Component {

  render() {

    return (
      <QueryRenderer
        environment={environment}
        query={AssetPageQuery}
        variables={{businessName:this.props.match.params.businessName}}
        render={({error,props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <Asset asset={props.viewer.Asset}/>
          }
          return <div>Loading</div>
        }}
      />
    )
  }

}

export default SingleAssetPage