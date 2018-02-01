import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {GridList, GridListTile, GridListTileBar} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui-icons/Delete';
import AssetImages from './AssetImages'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#fafafa',
  },
  gridList: {
    width: 500,
    // height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
});

function ImageGrid(props) {
  const {classes} = props

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        <GridListTile cols={2}>
          <AssetImages imageDrop={props.imageDrop}/>
        </GridListTile>
        {
          props.images.map(image => (
            <GridListTile key={image.preview} cols={1} rows={1}>

              <img id={image.preview} src={image.preview} alt={image.name}/>

              <GridListTileBar
              title={image.name}
              titlePosition="top"
              actionIcon={
                <IconButton
                  className={classes.icon}
                  onClick={() => props.removeImage(document.getElementById(image.preview))}>
                  <Delete/>
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
              />
            </GridListTile>
          ))
        }
      </GridList>
    </div>
  )
}

ImageGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGrid);