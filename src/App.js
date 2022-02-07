import "./App.css";
import "./input.css";
import React from "react";
import Homedisplay from "./Homedisplay";

import { Provider } from "react-redux";
import store from "./services/store";

export default function App() {
  return (
    <Provider store={store}>
      <Homedisplay />
    </Provider>
  );
}
