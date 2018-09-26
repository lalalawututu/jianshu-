import React, {Component, Fragment } from 'react';
import TodoItem from './TodoItem'; 

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: ['learn ebnglish','xyueqi'],
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.getListItem = this.getListItem.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    });
  }

  handleItemDelete(index) {
    const list = [...this.state.list];
    list.splice(index,1);

    this.setState({
      list: list
    });
  }

  getListItem() {
    return this.state.list.map((item, index) => {
      return (
        <li key={index}>
          <TodoItem content={item} index={index} deleteItem={this.handleItemDelete}/>
        </li>
      )
    })
  }

  render () {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getListItem()}
        </ul>
      </Fragment>
    )
  }
}

export default TodoList;