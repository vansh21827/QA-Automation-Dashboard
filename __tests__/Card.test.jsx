import { render, screen } from "@testing-library/react";
import Card from "../components/Card";

describe("Card Component", () => {
  test("renders without crashing", () => {
    render(
      <Card
        title="Inception"
        description="A sci-fi thriller."
      />
    );
  });

  test("renders the title", () => {
    render(
      <Card
        title="Inception"
        description="A sci-fi thriller."
      />
    );

    expect(screen.getByText("Inception")).toBeInTheDocument();
  });

  test("renders the description", () => {
    render(
      <Card
        title="Inception"
        description="A sci-fi thriller."
      />
    );

    expect(
      screen.getByText("A sci-fi thriller.")
    ).toBeInTheDocument();
  });

  test("renders the heading", () => {
    render(
      <Card
        title="Inception"
        description="A sci-fi thriller."
      />
    );

    expect(
      screen.getByRole("heading")
    ).toBeInTheDocument();
  });
});