import React from "react";
import Header from "..";
import ReactDOM from "react-dom";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
});
