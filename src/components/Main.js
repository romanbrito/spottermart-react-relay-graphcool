import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AssetListPage from './AssetListPage'
import CreateAsset from './CreateAsset'

const Main = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={AssetListPage}/>
      <Route exact path='/create' component={CreateAsset}/>
    </Switch>
  )
}

export default Main