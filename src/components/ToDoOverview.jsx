import React from "react";
import ToDo from "./ToDo";

const ToDoOverview = (props) => {
  return (
    <div className="overview">
      <h1>Get all To Do cards in the overview</h1>
      <ToDo />

      {/* {todoList.map((key, item) => {
        <div key={key}>
          <ToDo title={item.title} description={item.comment} tags={item.tags} />
        </div>;
      })} */}
      
    </div>
  );
};

export default ToDoOverview;
