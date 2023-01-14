import { Component, useState } from "react";
import { Incrementer } from "./components/incrementer-fn";
import "./App.css";
import { Clock } from "./components/clock-fn";
import { Form } from "./components/form";
import { List } from "./components/list";

const App = () => {
  return (
    <div>
      <List />
    </div>
  );
};

export default App;
