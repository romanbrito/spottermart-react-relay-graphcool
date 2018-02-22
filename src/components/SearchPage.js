import React, {Component} from 'react'
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
  hits: {
    backgroundColor: '#fafafa'
  },
  backLogo: {
    paddingRight: 5,
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
          <a href="https://www.algolia.com/" target="_blank"><img className={classes.backLogo}
                                                                  src="https://www.algolia.com/static_assets/images/pricing/pricing_new/algolia-powered-by-14773f38.svg"
                                                                  alt=""/></a>
        </div>

        <div className={classes.hits}>
          <Hits hitComponent={hit => <DisplaySearch hit={hit} history={this.props.history}/>}/>
          <Pagination/>
        </div>

      </InstantSearch>
    )
  }
}


export default withStyles(styles)(AlgoliaSearch)