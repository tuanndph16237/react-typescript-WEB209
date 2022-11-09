import React from 'react';
import { ITodo } from '../../interface/todo';
import ItemTodo from './ItemTodo';
type ListTodoProps ={
    todos: ITodo[];
};

const ListTodo = ({todos}: ListTodoProps) => {
    return (
        <>
            {todos.map((todos, index) =>(
                <div key={index}>
                    <ItemTodo todo={todos}/>
                </div>

            ))}
        </>
    )
}

export default ListTodo
