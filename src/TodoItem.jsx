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

  render () {
    return (
      <Fragment>
        <div onClick={this.handleClick}>
          {this.props.test} - {this.props.content}
        </div>
      </Fragment>
    )
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number,
}

TodoItem.defaultProps = {
  test: 'hello',
}

export default TodoItem;