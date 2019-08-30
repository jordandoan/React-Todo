import React, { Component } from 'react';
import { thisExpression } from '@babel/types';
class TodoList extends Component {
  
  render() {
    return (
      <div>
        <h2>Your To Do List</h2>
        {this.props.tasks.map((task) => {
            return (<div className="task">
              <p key={task.id}>{task.task}<button onClick={(event) => {this.props.handleComplete(event,task)}}>Complete</button></p>
            </div>);
        })} 
        </div>
    );
  }
}

export default TodoList;