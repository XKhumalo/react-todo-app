import React, { Component } from 'react';
import './App.css';
import NewTask from './NewTask.js';
import TaskList from './TaskList.js';
import Task from './Task.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      toggleAllCheckboxHidden: true
    }

    this.handleTaskAdd = this.handleTaskAdd.bind(this);
  }

  render() {
    return (
      <div className="App">
        <h1>todos</h1>
        <NewTask onTaskAdd={this.handleTaskAdd} toggleAllCheckboxHidden={this.state.toggleAllCheckboxHidden} />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }

  handleTaskAdd(newTask) {
    this.setState({
      tasks: [...this.state.tasks, newTask],
      toggleAllCheckboxHidden: true
    })
  }
}

export default App;
