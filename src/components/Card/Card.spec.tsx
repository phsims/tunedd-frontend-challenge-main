import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  it("renders correctly", () => {
    const { baseElement } = render(<Card>Stuff here</Card>);
    expect(baseElement).toBeTruthy();
  });
  it("renders children", () => {
    const { getByText } = render(<Card>Stuff here</Card>);
    expect(getByText("Stuff here")).toBeTruthy();
  } );
});
