import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/TodoSlice";

const TodoAdd = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.todo);

  const addTask = () => {
    dispatch(
      addTodo({
        task: value,
      })
    );
    setValue("");
  };

  return (
    <div className="">
      <input
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="mt-4" onClick={() => addTask(value)}>
        Add
      </button>
    </div>
  );
};

export default TodoAdd;
