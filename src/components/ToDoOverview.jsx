import React from "react";
import ToDo from "./ToDo";

const ToDoOverview = (props) => {
  return (
    <div className="overview">
      <h1>Get all To Do cards in the overview</h1>
      <ToDo />

      {props.todoList.map((card, index) => {
        return (
          <div key={index}>
          <p>Title: {card.title}</p>
          <p>Description: {card.description}</p>
          <p>Tags: {card.tags}</p>
        </div>
        )
        
      })}


    </div>
  );
};

export default ToDoOverview;
