import React, { useState } from 'react';
import { ITodo } from '../../interface/todo';

type AddTodoProps = {
    addTodo: (todo: ITodo) => void;
};

const AddToDo = (props: AddTodoProps) => {
    const [value, setValue] = useState<ITodo>();
    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setValue({
            id: 1,
            name: e.target.value,
        });
    };
    const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        props.addTodo(value);
    };
    return (
        <>
            <div>{JSON.stringify(value)}</div>
            <form onSubmit={onHandleSubmit}>
                <input type="text" onChange={onHandleChange}/>
                <button>Add New</button>
            </form>
        </>
    )
}

export default AddToDo
