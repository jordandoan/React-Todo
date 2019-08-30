import React, { Component } from 'react';
import { thisExpression } from '@babel/types';
class TodoList extends Component {

  render() {
    return (
      <div>
        <h2>Your To Do List</h2>
        {this.props.tasks.map(task => <p key={task.id}>{task.task}</p>)} 
        </div>
    );
  }
}

export default TodoList;