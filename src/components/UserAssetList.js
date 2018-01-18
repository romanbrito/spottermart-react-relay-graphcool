import React, { Component } from 'react'
import {
  createFragmentContainer,
createPaginationContainer,
  graphql
} from 'react-relay'
import Asset from './Asset'

class UserAssetList extends Component {

  render() {

    return (
        <div>
          {this.props.viewer.allAssets.edges.map(({node}) => (
            <Asset key={node.__id} asset={node} userAsset={true} history={this.props.history}/>
          ))}
        </div>
    )

  }

}

export default createFragmentContainer(UserAssetList,
  {
    viewer: graphql`
      fragment UserAssetList_viewer on Viewer {
          allAssets(
              filter: $filter,
              last: 100,
              orderBy: createdAt_DESC
          ) @connection(key: "UserAssetList_allAssets") {
              edges {
                  node {
                      ...Asset_asset
                  }
              }
          }
      }
    `
  }
  )
