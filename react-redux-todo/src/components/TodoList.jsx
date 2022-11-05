import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action/todoAction";

export default function TodoList(){
    const [inputTodo, setInputTodo] = useState("");
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputTodo);
        dispatch(addTodo(inputTodo))
    }

    const handleChange = (e) => {
        setInputTodo(e.target.value);
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <h2>Todo List</h2>
            <input type="text" name="inputTodo" placeholder="add ur todo" value={inputTodo} onChange={ handleChange }/>
            <button>add</button>
        </form>
        </>
    )
}