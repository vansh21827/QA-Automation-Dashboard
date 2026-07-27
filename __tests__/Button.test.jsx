import { render, screen } from "@testing-library/react";
import Button from "../components/Button";

describe("Button Component", () => {
  test("renders without crashing", () => {
    render(<Button text="Click Me" />);
  });

  test("renders the text passed through props", () => {
    render(<Button text="Click Me" />);

    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("renders as a button element", () => {
    render(<Button text="Submit" />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});