import React, {Component} from 'react'
import Asset from './Asset'

class AssetList extends Component {
  render(){

    const assetsToRender = [{
      id: '1',
      businessName: 'Texadelphia Laredo',
      price: '120,000'
    }, {
      id: '2',
      businessName: 'Texadelphia McAllen',
      price: '250,000'
    }]

    return (
      <div>
        {assetsToRender.map(asset => (
          <Asset key={asset.id} asset={asset}/>
        ))}
      </div>
    )

  }
}

export default AssetList