import { render, screen } from "@testing-library/react";
import LoginForm from "./components/LoginForm";

test("should show password", () => {
  render(<LoginForm />);
  const input = screen.getByPlaceholderText("Password");
  expect(input).toBeInTheDocument(input);
});
