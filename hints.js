// With hooks, the old state is REPLACED by the one that triggers the event.
// To correct that, you’ll need to copy the entire properties from the old state
// using the spread operator (…) and override the part of it that is the new.
  
const handleChange = (e) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  };



// Using Object.keys: check out this article: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
const getTodoStorage = () => {

  let cards = [],
      keys = Object.keys(localStorage),
      i = keys.length;

  while ( i-- ) {
      cards.push(JSON.parse(localStorage.getItem(keys[i])));
  }
  return cards;
}


// Homepage navigation of buttons
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <h1>This is a To Do app, created with React</h1>
      <div className="button-set">
        <button className="nav-button" onClick={() => navigate("/todo")}>Create new To Do</button>
        <button className="nav-button" onClick={() => navigate("/todooverview")}>To Do Overview</button>
      </div>
    </div>
  );
};

export default Homepage;