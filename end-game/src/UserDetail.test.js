import { cleanup, render, screen } from "@testing-library/react";
import UserDetail from "./UserDetail";

afterEach(() => {
  cleanup();
});

test("should be present in document", () => {
  render(<UserDetail />);
  const element = screen.getByTestId("user-detail-id");
  expect(element).toBeInTheDocument();
});

test("should have text content", () => {
  const testData = {
    name: "Rahul",
  };
  render(<UserDetail name={testData.name} />);
  const element = screen.getByTestId("user-detail-id");
  expect(element).toHaveTextContent("Name: " + testData.name);
  expect(element).toContainHTML("h1");
});
