import React, {Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';

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
    const value = e.target.value;
    this.setState(() => ({
        inputValue: value
      })
    );
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }));
  }

  handleItemDelete(index) { 
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index,1);;
      return {list}
    });
  }

  getListItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index} 
          content={item} 
          index={index} 
          deleteItem={this.handleItemDelete}
        />
      )
    })
  }

  componentDidMount() {
    
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