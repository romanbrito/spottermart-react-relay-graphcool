import React from 'react'
import {Switch, Route} from 'react-router-dom'
import '../sass/Main.css'
import CreateAsset from './CreateAsset'
import Login from './Login'
import SingleAssetPage from './SingleAssetPage'
import UserAssetListPage from './UserAssetListPage'
import UpdateAssetPage from './UpdateAssetPage'
import MessageListPage from './MessageListPage'
import ProfilePage from './ProfilePage'
import FrontPage from './FrontPage'
import SearchPage from './SearchPage'

const Main = (props) => {
  const extraProps = props

  return (
    <div className="main">
      <Switch>
        <Route exact path='/' component={FrontPage}/>
        <Route exact path='/create' component={CreateAsset}/>
        <Route exact path='/assets' component={SearchPage}/>
        <Route exact path='/login' render={(props) => (
          <Login {...props} getUserName={extraProps.getUserName}/>
        )}/>
        <Route exact path='/myAssets' component={UserAssetListPage}/>
        <Route exact path='/myMessages' component={MessageListPage}/>
        <Route exact path='/profile' component={ProfilePage}/>
        <Route exact path='/update/:assetId' component={UpdateAssetPage}/>
        <Route path='/:businessName' component={SingleAssetPage}/>
      </Switch>
    </div>
  )
}

export default Main