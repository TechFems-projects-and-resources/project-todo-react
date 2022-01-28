import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom"
import ToDoOverview from "./components/ToDoOverview";

function App() {
  const [todoList, setTodoList] = useState([]);

  const getTodoStorage = () => {
    let cards = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
      cards.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    return cards;
  };

  useEffect(() => {
    setTodoList(getTodoStorage());
  }, []);

  useEffect(() => {
    console.log(todoList);
  }, [todoList])

  return (
    <Router>
    <div className="App">
      <div>
        <h1>This is a todo app, created with React</h1>
      </div>
      <div>
        <ToDoOverview todoList={todoList} />
      </div>
    </div>
    </Router>
  );
}

export default App;
