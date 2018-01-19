import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {GridList, GridListTile, GridListTileBar} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui-icons/Delete';
import UpdateAssetImages from "./UpdateAssetImages"

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
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
        {
          props.pictures.map(image => (
            <GridListTile key={image.secure_url} cols={1} rows={1}>

              <img id={image.secure_url} src={image.secure_url} alt={image.public_id}/>

              <GridListTileBar
                title={image.public_id}
                titlePosition="top"
                actionIcon={
                  <IconButton
                    className={classes.icon}
                    onClick={() => props.removePicture(document.getElementById(image.secure_url))}>
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
