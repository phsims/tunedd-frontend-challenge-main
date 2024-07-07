import React from "react";
import { render } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal", () => {
  it("renders correctly", () => {
    const { baseElement } = render(<Modal>Stuff here</Modal>);
    expect(baseElement).toBeTruthy();
  });
  it("renders children", () => {
    const { getByText } = render(<Modal>Stuff here</Modal>);
    expect(getByText("Stuff here")).toBeTruthy();
  });
});
