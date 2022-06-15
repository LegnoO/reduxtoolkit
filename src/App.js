import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeText, selectChange } from "./features/ChangeSlice";
import { removeTodo } from "./features/TodoSlice";
import { TodoAdd } from "./components/TodoAdd";

const App = () => {
  const dispatch = useDispatch();
  // const { name } = useSelector((state) => state.change);
  const { todoList } = useSelector((state) => state.todo);

  const [num, setNum] = useState(1);
  //

  useEffect(() => {
    // const array = [...todoList];
    // console.log(array);
    // const a = array.filter((array) => array.id !== 1);
    // console.log("zzzz");
    // console.log(a);
  }, []);
  const printArray = () => {
    console.log(todoList);
  };

  const removeTask = (id) => {
    dispatch(removeTodo({ id: id }));
  };
  return (
    <div className="container flex-column w-50 d-flex justify-content-center mt-3">
      {/* <h1>{name}</h1>
      <button onClick={() => dispatch(changeText("B"))}>Change Name</button>
      <input onChange={(e) => dispatch(changeText(e.target.value))}/> */}

      {/* {todo.map((item, index) => {
        <div key={index}>
          <p>{item}</p>
        </div>;
      })} */}
      <TodoAdd />
      <button className="mt-4" onClick={() => printArray()}>
        Array
      </button>

      {/* <button className="mt-4" onClick={() => removeTask(value)}>
        Minus
      </button> */}
    </div>
  );
};

export default App;
