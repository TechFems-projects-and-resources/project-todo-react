import React, { useEffect } from "react";
import ToDoOverview from "./ToDoOverview";

const Homepage = () => {
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
  }, [todoList]);

  return (
    <div>
      <h1>This is a todo app, created with React</h1>

      <div>
        <ToDoOverview todoList={todoList} />
      </div>
      <div>
        <button onClick={() => history.push("/todo")}>Create new To Do</button>
        <button onClick={() => history.push("/todooverview")}>To Do Overview</button>
      </div>
    </div>
  );
};

export default Homepage;
