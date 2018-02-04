import React, { Component } from 'react'
import {InstantSearch, Hits, SearchBox, Pagination} from 'react-instantsearch/dom'
import {withStyles} from 'material-ui/styles'
import '../sass/SearchPage.css'
import DisplaySearch from './DisplaySearch'

const styles = theme => ({
  search: theme.mixins.gutters({
    marginTop: '10vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
  label: {
    paddingLeft: 25,
    color: 'green'
  },
  row: {
    width: 'auto',
  },
  container: {
    margin: 'auto',
    width: '50%'
  },
  paper: {
    marginTop: '5vh',
    height: '17vh',
    textAlign: 'center',
    paddingTop: '3vh'
  }
})


class AlgoliaSearch extends Component {

  render() {
    const {classes} = this.props

    return (
      <InstantSearch
        appId='E4WQ29D3BH'
        apiKey='868078ad52fd8e57c099177430dd9fc3'
        indexName='Assets'
      >
        <div className={classes.search}>
        <SearchBox
          autoFocus
          translations={{placeholder: 'Search ...'}}
          searchAsYouType={true}
        />
        </div>

        <Hits hitComponent={DisplaySearch} />
        <Pagination />

      </InstantSearch>
    )
  }
}

export default withStyles(styles)(AlgoliaSearch)