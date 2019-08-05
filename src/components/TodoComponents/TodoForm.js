import React from 'react';

const TodoForm = (props) => {
  


 

   
        return (
            <form onSubmit={props.addTask}>
                <input onChange={props.inputHandler} value={props.task} placeholder='Add Task' />
                <button>Submit New Task</button>
            </form>
        )
    
}

export default TodoForm;