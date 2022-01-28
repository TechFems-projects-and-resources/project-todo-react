import { useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import ToDoOverview from "./ToDoOverview";

const Homepage = () => {
  const [todoList, setTodoList] = useState([]);
  const navigate = useNavigate();

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
    <div className="homepage">
      <h1>This is a todo app, created with React</h1>
      <div>
        {/* <ToDoOverview todoList={todoList} /> */}
      </div>
      <div className="button-set">
        <button className="nav-button" onClick={() => navigate("/todo")}>Create new To Do</button>
        <button className="nav-button" onClick={() => navigate("/todooverview")}>To Do Overview</button>
      </div>
    </div>
  );
};

export default Homepage;
