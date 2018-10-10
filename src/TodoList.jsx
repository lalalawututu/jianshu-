import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CHANGE_INPUT_VALUE } from "./store/actionTypes";
import { getInputChangeAction } from "./store/actionCreator";

const TodoList = (props) => {
  return (
    <div>
      <div>
        <input value={props.inputValue} onChange={props.handleInputChange}/>
        <button onClick={props.handleClick}>提交</button>
      </div>
      <ul>
        {
          props.list.map((item, index) => {
            return <li onClick={() => props.handleDelete(index)} key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

//store.dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = getInputChangeAction(e.target.value);
      dispatch(action);
    },

    handleClick() {
      const action = {
        type: 'add_item'
      }
      dispatch(action);
    },

    handleDelete(index) {
      const action = {
        type: 'delete_item',
        index
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);