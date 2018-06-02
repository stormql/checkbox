import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import { connect } from 'react-redux';
import compose from 'recompose/compose';
import {toggleCheckbox} from './../actions';

import { getStateKey } from "../reducers";

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class CheckboxList extends React.Component {

  handleToggle = value => () => {
    // Without this next line of code
    // The event will not fire !
    const { toggleCheckbox } = this.props
    toggleCheckbox(value);
  };

  render() {
    const { classes, ralph } = this.props;

    return (
      <div className={classes.root}>
        <List>
          {[0, 1, 2, 3].map(value => (
            <ListItem
              key={value}
              role={undefined}
              dense
              button
              onClick={this.handleToggle(value)}
              className={classes.listItem}
            >
              <Checkbox
                checked={ralph.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText primary={`Line item ${value + 1}`} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

CheckboxList.propTypes = {
  classes: PropTypes.object.isRequired,
  ralph: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  // products: getStateKey(state)
  ralph: getStateKey(state)
})


export default compose(
  connect(mapStateToProps,{toggleCheckbox}),
  withStyles(styles),
)(CheckboxList);
