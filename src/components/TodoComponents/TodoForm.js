import React, { Component } from 'react';
class TodoForm extends Component {

  render() {
    return (
      <div>
        <input type="text" placeholder="task" onKeyDown={(event) => {this.props.handleKeypress(event,this.props.currentTask)}} onChange={(event) => this.props.handleChange(event)} value={this.props.currentTask}/>
        <button type="submit" onClick={() => {this.props.addTask(this.props.currentTask)}}>Add to list!</button>
      </div>
    );
  }
}

export default TodoForm;