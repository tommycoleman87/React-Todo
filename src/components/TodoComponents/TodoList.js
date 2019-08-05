// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from '../TodoComponents/Todo';

const TodoList = (props) => {
    return(
        <div>
            {props.searchFilter.length < 1 ? props.toDos.map(todo => {
                return <ToDo key={todo.id} todo={todo} toggleTask={props.toggleTask}/>
            }) : props.toDos.map(todo => {
                if(todo.task.toLowerCase().includes(props.searchFilter.toLowerCase())){
                    return <ToDo key={todo.id} todo={todo} toggleTask={props.toggleTask}/>
                } else {
                    return;
                }
            })}
        </div>
    )
}

export default TodoList;