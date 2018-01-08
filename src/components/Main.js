import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AssetListPage from './AssetListPage'
import CreateAsset from './CreateAsset'
import Login from './Login'
import SingleAsset from './SingleAsset'

const Main = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={AssetListPage}/>
      <Route path='/:businessName' component={SingleAsset}/>
      <Route exact path='/create' component={CreateAsset}/>
      <Route exact path='/login' component={Login}/>
    </Switch>
  )
}

export default Main