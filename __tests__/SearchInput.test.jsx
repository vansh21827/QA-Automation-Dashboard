import { render, screen } from "@testing-library/react";
import SearchInput from "../components/SearchInput";

describe("SearchInput Component", () => {
  test("renders input", () => {
    render(<SearchInput placeholder="Search movies..." />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("renders placeholder", () => {
    render(<SearchInput placeholder="Search movies..." />);

    expect(
      screen.getByPlaceholderText("Search movies...")
    ).toBeInTheDocument();
  });
});