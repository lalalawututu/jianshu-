import React, {Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {deleteItem, index} = this.props;
    deleteItem(index);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }

  render () {
    return (
      <Fragment>
        <div onClick={this.handleClick}>
          {this.props.content}
        </div>
      </Fragment>
    )
  }
}

TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  deleteItem: PropTypes.func,
  index: PropTypes.number,
}


export default TodoItem;