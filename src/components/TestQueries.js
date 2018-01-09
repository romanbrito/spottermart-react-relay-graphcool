import React, {Component} from 'react'
import {fetchQuery} from "../Environment"

class SingleAssetPage extends Component {

  render() {
    {this.queryFunction("Laredo")}
    return (
      <div>
        {console.log(this.props.match.params.businessName)}
      </div>
    )
  }

  queryFunction = async (businessName) => {
    const QueryText = `
    query AssetListPageQuery ($businessName: String!) {
      viewer {
          Asset(businessName:$businessName){              
      id
      businessName
      price
              
        
      }
      }
  }`
    const checkVoteQuery = { text: QueryText }

    const result = await fetchQuery(checkVoteQuery, {businessName})

    console.log(result)

  }
}

export default SingleAssetPage