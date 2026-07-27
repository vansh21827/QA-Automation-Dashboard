import { render, screen } from "@testing-library/react";
import MovieList from "../components/MovieList";

describe("MovieList", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { id: 1, title: "Inception" },
            { id: 2, title: "Interstellar" },
            { id: 3, title: "The Dark Knight" }
          ]),
      })
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("loads and displays movies", async () => {
    render(<MovieList />);

    expect(await screen.findByText("Inception")).toBeInTheDocument();
    expect(screen.getByText("Interstellar")).toBeInTheDocument();
    expect(screen.getByText("The Dark Knight")).toBeInTheDocument();
  });
});