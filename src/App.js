import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: [],
      currentTask: "",
    };
  }

  addTask = (task) => {
    let newTaskObject = {
      task:task,
      id: Date.now(),
      completed: false,
    };
    this.state.tasks.push(newTaskObject);
    let newState = this.state;
    newState.currentTask = "";
    this.setState(newState);
  }

  handleKeypress = (event, task) => {
    if (event.keyCode == 13) {
      this.addTask(task);
    }
  }

  handleChange = (event) => {
    this.setState({
      currentTask:event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks}/>
        <TodoForm addTask={this.addTask} handleKeypress={this.handleKeypress} handleChange={this.handleChange} currentTask={this.state.currentTask}/>
      </div>
    );
  }
}

export default App;
