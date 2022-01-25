import "./App.css";
import { useState, useEffect } from "react";
import ToDoOverview from "./components/ToDoOverview";

function App() {
  const [todoList, setTodoList] = useState([]);

  const getTodoStorage = () => {
    let values = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }
    return values;
  };

  useEffect(() => {    
    getTodoStorage((values) => {
      console.log(values);
      
      setTodoList(values);
      console.log(todoList);
    });
  }, [todoList]);

  return (
    <div className="App">
      <div>
        <h1>This is a todo app, created with React</h1>
      </div>
      <div>
        <ToDoOverview todoList={todoList} />
      </div>
    </div>
  );
}

export default App;
