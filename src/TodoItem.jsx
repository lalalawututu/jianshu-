import React, {Component, Fragment } from 'react';

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
          {this.props.content}
        </div>
      </Fragment>
    )
  }
}

export default TodoItem;