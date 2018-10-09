import React from 'react';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
   return (
    <div>
      <div>
        <Input placeholder="Basic usage" value={props.inputValue} style={{width:'300px'}} onChange={props.handleInputChange}/>
        <Button type="primary" onClick={props.handleButtonClick}>Primary</Button>
      </div>
      <List
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>)}
        style={{width:'300px'}}
      />
    </div>
   )
}

export default TodoListUI;