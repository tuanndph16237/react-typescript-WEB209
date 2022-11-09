import React from 'react';
import { ITodo } from '../../interface/todo';

type ItemTodoProps ={
    todo: ITodo;
};

const ItemTodo = ({todo}: ItemTodoProps) => {
    return (
        <>
            {todo.name} <button>Remove</button>
        </>
    )
}

export default ItemTodo
