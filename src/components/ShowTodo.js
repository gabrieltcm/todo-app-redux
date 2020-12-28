import React from "react";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (action) => dispatch(action),
  };
};

function ShowTodo(props) {
  function deleteTodo() {
    const action = {
      type: "DELETE",
      payload: props.id,
    };
    props.deleteTodo(action);
  }

  return (
    <div className="mt-3 border p-3">
      <h3>{props.todo}</h3>
      <button className="btn btn-sm btn-danger" onClick={deleteTodo}>
        Delete
      </button>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(ShowTodo);
