import React from "react";
import ToDo from "./ToDo";

const ToDoOverview = (props) => {
  return (
    <div className="overview">
      <h1>Get all To Do cards in the overview</h1>
      
      <ToDo />
      <div className="card-list">
      {props.todoList.map((card, index) => {
        return (
          <div className="overview-card" key={index}>
            <p>Title: {card.title}</p>
            <p>Description: {card.description}</p>
            <p>Tags: {card.tag}</p>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default ToDoOverview;
