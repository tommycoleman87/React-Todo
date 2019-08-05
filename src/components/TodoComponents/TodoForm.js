import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: '',
        }
    }

    inputChangeHandler = (e) => {
        this.setState({
            task: e.target.value
        })
    }

    submitTask = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.task);
    }

    render() {
        return (
            <form onSubmit={this.submitTask}>
                <input onChange={this.inputChangeHandler} value={this.state.task} placeholder='Add Task' />
                <button>Submit New Task</button>
            </form>
        )
    }
}

export default TodoForm;