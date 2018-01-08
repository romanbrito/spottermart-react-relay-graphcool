import React, { Component } from 'react'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from '../Environment'
import {ITEMS_PER_PAGE} from '../constants'
import AssetList from './AssetList'

const AssetListPageQuery = graphql`
  query AssetListPageQuery (
      $count: Int!,
      $after: String
  ){
      viewer {
          ...AssetList_viewer
      }
  }
`
class AssetListPage extends Component {

  render(){
    return(
      <QueryRenderer
      environment={environment}
      variables={{
        count: ITEMS_PER_PAGE,
      }}
      query={AssetListPageQuery}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>
        } else if (props){
          return <AssetList viewer={props.viewer}/>
        }
        return <div>Loading</div>
      }}
      />
    )
  }
}

export default AssetListPage