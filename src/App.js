import "./App.css";
import ToDoOverview from "./components/ToDoOverview";

function App() {
  return (
    <div className="App">
      <div>
        <h1>This is my todo app, created with React</h1>
      </div>
      <div>
        <ToDoOverview />
      </div>
    </div>
  );
}

export default App;
