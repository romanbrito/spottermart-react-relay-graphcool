import React, {Component} from 'react'
import Asset from './Asset'
import {
  createFragmentContainer,
  createPaginationContainer,
  graphql
} from 'react-relay'
import Button from 'material-ui/Button'
import {ITEMS_PER_PAGE} from '../constants'

class AssetList extends Component {
  render(){

    return (
      <div>
        <div>
          {this.props.viewer.allAssets.edges.map(({node}) => (
            <Asset key={node.__id} asset={node} history={this.props.history}/>
          ))}
        </div>
        <Button
          color="primary"
          onClick={() => this._loadMore()}>
          More
        </Button>
      </div>

    )

  }

  _loadMore() {
    if (!this.props.relay.hasMore()) {
      console.log(`Nothing more to load`)
      return
    } else if (this.props.relay.isLoading()) {
      console.log(`Request is already pending`)
      return
    }

    this.props.relay.loadMore(ITEMS_PER_PAGE)
  }
}

export default createPaginationContainer(AssetList,
  {
    viewer: graphql`
      fragment AssetList_viewer on Viewer {
          allAssets(
              first: $count,
              after: $after,
              orderBy: createdAt_DESC
          ) @connection(key: "AssetList_allAssets") {
              edges {
                  node {
                      ...Asset_asset
                  }
              }
              pageInfo {
                  hasNextPage
                  endCursor
              }
          }
      }
    `,
  },
  {
    direction: 'forward',
    query: graphql`
      query AssetListForwardQuery(
          $count: Int!,
          $after: String,
      ) {
          viewer {
              ...AssetList_viewer
          }
      }
    `,
    getConnectionFromProps(props) {
      return props.viewer && props.viewer.allAssets
    },
    getFragmentVariables(previousVariables, totalCount) {
      return {
        ...previousVariables,
        count: totalCount,
      }
    },
    getVariables(props, paginationInfo, fragmentVariables) {
      return {
        count: paginationInfo.count,
        after: paginationInfo.cursor
      }
    },
  }
)