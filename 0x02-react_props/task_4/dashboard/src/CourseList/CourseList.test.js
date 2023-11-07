import React from "react";
import { render } from "@testing-library/react";
import CourseList from "./CourseList";

describe("CourseList component tests", () => {
  it("should render without crashing", () => {
    const { container } = render(<CourseList />);
    expect(container).toBeDefined();
  });

  it("renders 5 different rows", () => {
    const { getAllByRole } = render(<CourseList />);
    const rows = getAllByRole("row");
    expect(rows).toHaveLength(5);
  });
});
