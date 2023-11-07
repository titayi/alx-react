import React from "react";
import { render } from "@testing-library/react";
import CourseListRow from "./CourseListRow";

describe("Course List Row component test", () => {
  it("should render without crashing", () => {
    const { container } = render(<CourseListRow textFirstCell="test" />);
    expect(container).toBeDefined();
  });

  it("should render one cell with colspan = 2 when textSecondCell is null", () => {
    const { getByText } = render(
      <CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null} />
    );
    const cell = getByText("test");
    expect(cell.colSpan).toBe(2);
  });

  it("should render two cells when textSecondCell is not null", () => {
    const { getAllByText } = render(
      <CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test" />
    );
    const cells = getAllByText("test");
    expect(cells).toHaveLength(2);
  });
});
