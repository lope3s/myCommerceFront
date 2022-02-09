import React from "react";
import Header from "..";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
});

//test the user input and state change https://testing-library.com/docs/ecosystem-user-event/

it("receives the input value", () => {
    const { getByTestId } = render(<Header />);

    const input = getByTestId("input");

    input.innerText = "pink shirt";

    expect(input);
});
