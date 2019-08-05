import React from 'react';
import TodoList from '../src/components/TodoComponents/TodoList';
import TodoForm from '../src/components/TodoComponents/TodoForm';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      toDos: [ {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }],
    }
  }



  submitTaskHandler = (taskName) => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      toDos: [...this.state.toDos, newTask]
    })
    console.log(this.state.toDos)
  }

   toggleTask = (id) => {
    this.setState({
      toDos: this.state.toDos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo;
        }
      })
    })
    console.log(this.state.toDos)
  };
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.submitTaskHandler}/>
        <TodoList toDos={this.state.toDos} toggleTask={this.toggleTask}/>
      </div>
    );
  }
}

export default App;
