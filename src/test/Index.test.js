import React from "react";
import renderer from "react-test-renderer";
import App from "../App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers";

it("Page snapshot testing", () => {
    const store = createStore(reducer);
  const component = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(component).toMatchSnapshot();
});
