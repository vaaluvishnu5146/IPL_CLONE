import React, { useRef } from "react";
import { saveTodos } from "./Redux/Reducers/Todo.reducer";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatcher = useDispatch();
  const { data = [] } = useSelector((state) => state.todos);
  const todoRef = useRef(null);

  function handleTodos(e) {
    if (e) {
      dispatcher(saveTodos(todoRef.current.value));
      todoRef.current.value = "";
    }
  }

  return (
    <div className="App container">
      <div className="row d-flex justify-content-center">
        <div className="col-4">
          <div className="card">
            <div className="row">
              <input ref={todoRef} id="todo" placeholder="Enter Task" />
              <button className="btn btn-primary" onClick={handleTodos}>
                Add Todo
              </button>
            </div>
            <ul className="list-group">
              {data.map((task, i) => (
                <li key={`${i}`} className="list-group-item">
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
