// Test away!
import React from "react";
import Display from "./Display.js";
import Controls from "../controls/Controls.js";
import { render } from "@testing-library/react";

test("Gate default values are correct", () => {
  const { getByText } = render(<Display />);

  getByText(/Unlocked/i);
  getByText(/Open/i);
});

test("cannot be closed or opened if it is locked", () => {
  const { getByText } = render(<Controls />);

  const lockGateButton = getByText(/Lock Gate/i);
  const closeGateButton = getByText(/Close Gate/i);
});
