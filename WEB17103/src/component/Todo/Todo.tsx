import React, {useState} from 'react';
import { ITodo } from '../../interface/todo';
import AddToDo from './AddToDo';
import ListTodo from './ListTodo';
type Props = {}

const Todo = (props: Props) => {
    const [todos, setTodos] = useState<ITodo[]>([
        { id: 1, name: "Todo 1" },
        { id: 2, name: "Todo 2" },
    ]);
    const onHandleAddTodo = (todo: ITodo) =>{
        setTodos([...todos, todo]);
    };
  return (
    <>
    {JSON.stringify(todos)}
    </>
  )
}

export default Todo