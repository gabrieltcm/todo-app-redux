import React from "react";
import "./App.css";

//Components
import CreateTodo from "./components/CreateTodo";
import DisplayTodo from "./components/DisplayTodo";
import store from "./store";
/* 
A provider basically notifies all components 
in your react project that the store can be accessed by all of them.
Basically like a context api passing all the data to all the components
*/
import { Provider } from "react-redux";

function App() {
  return (
    //Now by wrapping this Provider, all the components can access the "Store"
    <Provider store={store}>
      <div className="App container">
        <h2>Redux Todo App</h2>
        <CreateTodo />
        <DisplayTodo />
      </div>
    </Provider>
  );
}

export default App;
