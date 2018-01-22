import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AssetListPage from './AssetListPage'
import CreateAsset from './CreateAsset'
import Login from './Login'
import SingleAssetPage from './SingleAssetPage'
import UserAssetListPage from './UserAssetListPage'
import UpdateAssetPage from './UpdateAssetPage'
import CreateMessage from './CreateMessage'
import MessageListPage from './MessageListPage'

const Main = (props) => {
  const  extraProps = props

  return (
    <Switch>
      <Route exact path='/' component={AssetListPage}/>
      <Route exact path='/create' component={CreateAsset}/>
      <Route exact path='/login' render={(props) => (
        <Login {...props} getUserName={extraProps.getUserName}/>
      )}/>
      <Route exact path='/myAssets' component={UserAssetListPage}/>
      <Route exact path='/myMessages' component={MessageListPage}/>
      <Route exact path='/createMessage/:assetId' component={CreateMessage}/>
      <Route exact path='/update/:assetId' component={UpdateAssetPage}/>
      <Route path='/:businessName' component={SingleAssetPage}/>
    </Switch>
  )
}

export default Main