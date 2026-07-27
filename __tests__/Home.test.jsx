import { render, screen } from "@testing-library/react";
import Home from "../app/page";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          { id: 1, title: "Inception" }
        ]),
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Home Page", () => {
  test("renders all components", async () => {
    render(<Home />);

    expect(screen.getByText("QA Automation Project")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Click Me" })
    ).toBeInTheDocument();
    expect(screen.getByText("Inception")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Search movies...")
    ).toBeInTheDocument();
    expect(screen.getByText("Counter")).toBeInTheDocument();
    expect(screen.getByText("Movies")).toBeInTheDocument();

    // Wait for the mocked movie to appear
    expect(await screen.findByText("Inception")).toBeInTheDocument();
  });
});