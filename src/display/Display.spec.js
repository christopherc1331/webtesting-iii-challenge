// Test away!
import React from "react";
import Display from "./Display.js";
import { render } from "@testing-library/react";

test("Gate default values are correct", () => {
  const { getByText } = render(<Display />);

  getByText(/Unlocked/i);
  getByText(/Open/i);
});
