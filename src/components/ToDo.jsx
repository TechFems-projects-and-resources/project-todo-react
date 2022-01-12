import React, { useState } from "react";

const ToDo = () => {
  const [card, setCard] = useState({ title: "", comment: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // With hooks, the old state is REPLACED by the one that triggers the event.
  // To correct that, you’ll need to copy the entire properties from the old state
  // using the spread operator (…) and override the part of it that is the new.

  const handleChange = (e) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  };

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
        <input
          type="text"
          id="comment"
          name="comment"
          value={card.comment}
          onChange={handleChange}
          placeholder="Description"
        />
        <button id="submit-btn" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ToDo;
