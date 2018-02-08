import React from 'react'
import {withStyles} from 'material-ui/styles'

const styles = {
  footer: {
    flexShrink: 0,
  },
  padding: {
    padding: 25,
  },
  footContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    direction: 'ltr'
  },
  link: {
    textDecoration: 'none',
    fontSize: '0.7em',
    color: 'rgba(0,0,0,0.54)',
  },
  ul: {
    padding: 0,
    margin: 0,
    listStyleType: 'none'
  },
  backendRight: {
    float: 'right'
  },
  backendLeft: {
    float: 'left'
  },
  backLogo: {
    paddingRight: 5,
  }
}

const Footer = (props) => {
  const {classes} = props

  return (

    <footer className={classes.footer}>
      <div>
        <div className={classes.padding}>
          <div className={classes.footContainer}>
            <div className="footLeft">
              <ul className={classes.ul}>
                <li>
                  <a className={classes.link} href="#">Copyright © 2018 Spottermart</a>
                </li>
              </ul>
            </div>
            <div className="footRight">
              <ul className={classes.ul}>
                <li className={classes.backendLeft}>
                  <a href="https://www.graph.cool/" target="_blank"><img className={classes.backLogo}
                    src="https://www.graph.cool/static/media/badge.2cbac90a.svg" alt=""/></a>
                </li>
                <li className={classes.backendRight}>
                  <a href="https://www.algolia.com/" target="_blank"><img className={classes.backLogo}
                    src="https://www.algolia.com/static_assets/images/pricing/pricing_new/algolia-powered-by-14773f38.svg"
                    alt=""/></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default withStyles(styles)(Footer)