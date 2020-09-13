import React from 'react';
import Task from './components/Task';
import TasksInput from './components/TasksInput';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        // { id: 0, title: 'Create todo-react app', done: false },
        // { id: 1, title: 'Create some app', done: true },
        // { id: 2, title: 'Create simple todo app', done: false }
      ]
    };
  }

  addTask =  task => {
    this.setState(state => {
      let { tasks } = state;
      tasks.push({
        id: tasks.length !== 0 ? task.length : 0,
        title: task,
        done: false
      });
      return tasks;
    });
  };

  doneTasks = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      tasks[index].done = true;
      return tasks;
    });
  };


  deleteTasks = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      delete tasks[index];
      return tasks;
    });
  };

  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter(task => !task.done);
    const doneTasks = tasks.filter(task => task.done);


    return (
      <div className="App">
        <h1 className="top">Active tasks: {activeTasks.length}</h1>
        {[...activeTasks, ...doneTasks].map(task => (
          <Task
            deleteTasks={() => this.deleteTasks(task.id)}
            doneTasks={() => this.doneTasks(task.id)}
            task={task}
            key={task.id}></Task>
        ))}
        <TasksInput addTask={this.addTask}></TasksInput>
      </div>
    );
  }
}

export default App;
