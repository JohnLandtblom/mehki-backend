import * as React from "react";
import { render, screen } from "@testing-library/react";
import LoginForm from "../components/LoginForm";

test("renders email input", () => {
  render(<LoginForm />);
  const inputNode = screen.getByPlaceholderText("Email");

  expect(inputNode).toBeInTheDocument(inputNode);
});
