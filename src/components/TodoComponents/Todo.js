import React from 'react';

const Todo = (props) => {
    let style;
    if(props.todo.completed === true) {
        style = {
            textDecoration: 'line-through'
        }
    } else {
        style = {
            textDecoration: 'none',
        }
    }
    return (
        <div onClick={() => props.toggleTask(props.todo.id)} className='todo' style={style}><h2>{props.todo.task}</h2></div>
    )
}

export default Todo;