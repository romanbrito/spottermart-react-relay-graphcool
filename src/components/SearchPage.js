import React, {Component} from 'react'
import {InstantSearch, Hits, SearchBox, Pagination} from 'react-instantsearch/dom'
import {withStyles} from 'material-ui/styles'
import '../sass/SearchPage.css'
import DisplaySearch from './DisplaySearch'

const styles = theme => ({
  search: {
    width: '90%',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
  },
  backLogo: {
    display: 'block',
    textAlign: 'center',
    padding: '1% 2%'
  }
})


class AlgoliaSearch extends Component {

  render() {
    const {classes} = this.props

    return (
      <InstantSearch
        appId='E4WQ29D3BH'
        apiKey='868078ad52fd8e57c099177430dd9fc3'
        indexName='Assets'>

          <SearchBox
            autoFocus
            translations={{placeholder: 'Search ...'}}
            searchAsYouType={true}
          />

          <a href="https://www.algolia.com/" target="_blank" className={classes.backLogo}>
            <img src="https://www.algolia.com/static_assets/images/pricing/pricing_new/algolia-powered-by-14773f38.svg" alt=""/>
          </a>



          <Hits hitComponent={hit => <DisplaySearch hit={hit} history={this.props.history}/>}/>
          <Pagination/>


      </InstantSearch>
    )
  }
}


export default withStyles(styles)(AlgoliaSearch)