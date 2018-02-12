import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import GridList, {GridListTile} from 'material-ui/GridList';
import {Image} from 'cloudinary-react'
import '../sass/ImageGridList.css'

const styles = theme => ({
  root: {
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    paddingLeft: 15,
    paddingRight: 15,
  },
  gridList: {
    width: 170,
    height: 300,
  },
  subheader: {
    width: '100%',
  },
});

function ImageGridList(props) {

  const {classes} = props;

  return (
    <div className="ImageGrid">
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={1}>
          {props.pictures.map(tile => (
            <GridListTile key={tile.public_id} cols={1}>
              <Image cloudName="spottermart" publicId={tile.public_id} transformation="media_lib_thumb"/>
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);