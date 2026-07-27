import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../components/Counter";

describe("Counter Component", () => {
  test("starts at 0", () => {
    render(<Counter />);
    expect(screen.getByTestId("count")).toHaveTextContent("0");
  });

  test("increments when Increment button is clicked", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    await user.click(screen.getByRole("button", { name: /increment/i }));

    expect(screen.getByTestId("count")).toHaveTextContent("1");
  });

  test("decrements after incrementing", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    await user.click(screen.getByRole("button", { name: /increment/i }));
    await user.click(screen.getByRole("button", { name: /decrement/i }));

    expect(screen.getByTestId("count")).toHaveTextContent("0");
  });

  test("reset sets the count back to zero", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    await user.click(screen.getByRole("button", { name: /increment/i }));
    await user.click(screen.getByRole("button", { name: /increment/i }));
    await user.click(screen.getByRole("button", { name: /reset/i }));

    expect(screen.getByTestId("count")).toHaveTextContent("0");
  });

  test("decrement is disabled when count is zero", () => {
    render(<Counter />);

    expect(
      screen.getByRole("button", { name: /decrement/i })
    ).toBeDisabled();
  });
});