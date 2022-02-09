import React from "react";
import ReactDOM from "react-dom";
import MinimalistIconifiedButton from "..";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("renders without crasing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MinimalistIconifiedButton text="click me" />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("has the correct text", () => {
    const { getByTestId } = render(
        <MinimalistIconifiedButton text="content" />
    );

    expect(getByTestId("button")).toHaveTextContent("content");
});
