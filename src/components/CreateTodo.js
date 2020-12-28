import React, { useState } from "react";
import uniqid from "uniqid";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (action) => dispatch(action),
  };
};

function CreateTodo(props) {
  const [trackInput, setTrackInput] = useState("");

  const changeInput = (e) => {
    setTrackInput(e.target.value);
  };

  const submitTodo = (e) => {
    e.preventDefault();

    const value = {
      id: uniqid(),
      todo: trackInput,
    };

    const action = {
      type: "ADD",
      payload: value,
    };

    props.addTodo(action);
  };

  return (
    <div className="mt-3">
      <form onSubmit={submitTodo}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Todo"
          onChange={changeInput}
        />
        <input
          type="submit"
          className="btn btn-secondary mt-3"
          value="Submit!"
        />
      </form>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(CreateTodo);
