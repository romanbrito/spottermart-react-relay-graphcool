import React, {Component} from 'react'
import Asset from './Asset'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class AssetList extends Component {
  render(){

    return (
      <div>
        {this.props.viewer.allAssets.edges.map(({node}) => (
          <Asset key={node.__id} asset={node}/>
        ))}
      </div>
    )

  }
}

export default createFragmentContainer(AssetList, graphql`
  fragment AssetList_viewer on Viewer {
      allAssets(last:100, orderBy: createdAt_DESC) @connection(key:"AssetList_allAssets", filters:[]){
          edges{
              node {
                  ...Asset_asset
              }
          }
      }
  }
`)