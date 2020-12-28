import React from "react";
import { connect } from "react-redux";
import ShowTodo from "./ShowTodo";

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

function DisplayTodo(props) {
  return (
    <div>
      {props.todos.map((todo) => (
        <ShowTodo key={todo.id} id={todo.id} todo={todo.todo} />
      ))}
    </div>
  );
}

//connect acts a bridge between your React application and Store
//mapStateToProps acts as a vehicle that transport the data to your application
export default connect(mapStateToProps)(DisplayTodo);
