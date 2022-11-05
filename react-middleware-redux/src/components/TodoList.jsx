import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../redux/action/todoAction";

export default function TodoList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(getTodo())
  }, [])

  return(
    <>
    <h1>TodoList</h1>
    <ul>
        {state.todo.map(({createdAt, id, todo, status}, indeks) => (
            <li key={indeks}>{todo}</li>
        ))}
    </ul>
    </>
  );
}
