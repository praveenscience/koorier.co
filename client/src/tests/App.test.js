import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders the page", () => {
  render(<App />);
  const linkElement = screen.getByText(/koorier/i);
  expect(linkElement).toBeInTheDocument();
});
