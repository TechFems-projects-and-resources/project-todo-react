import { useNavigate } from 'react-router-dom';
import ToDoOverview from "./ToDoOverview";

const Homepage = () => {
  const navigate = useNavigate();

  

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
