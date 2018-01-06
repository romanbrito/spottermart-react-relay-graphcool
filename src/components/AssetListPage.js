import React, { Component } from 'react'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from '../Environment'
import AssetList from './AssetList'

const AssetListPageQuery = graphql`
  query AssetListPageQuery {
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