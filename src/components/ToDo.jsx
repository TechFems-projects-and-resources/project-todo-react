import React, { useState } from "react";

const ToDo = () => {
  const [card, setCard] = useState({ title: "", comment: "", tag: "" });
  const [key, setKey] = useState(new Date().toLocaleString("nl"))

  // With hooks, the old state is REPLACED by the one that triggers the event.
  // To correct that, you’ll need to copy the entire properties from the old state
  // using the spread operator (…) and override the part of it that is the new.
  const handleChange = (e) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();    
    setKey(new Date().toLocaleString("nl"))
    
    localStorage.setItem(JSON.stringify(key), JSON.stringify(card));
    setTimeout(resetCard, 3000)
  };

  const resetCard = () => {
    setCard({ title: "", comment: "", tag: "" })
  }




  return (
    <div className="todo-card">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          name="title"
          value={card.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          type="text"
          id="comment"
          name="comment"
          value={card.comment}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="text"
          id="tag"
          name="tag"
          value={card.tag}
          onChange={handleChange}
          placeholder="Tag(s)"
        />
        <button id="submit-btn" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ToDo;
