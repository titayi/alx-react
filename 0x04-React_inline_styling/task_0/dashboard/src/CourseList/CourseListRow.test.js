import React from "react";
import { render } from "@testing-library/react";
import CourseListRow from "./CourseListRow";

describe("Testing <CourseListRow />", () => {
  it("When isHeader is true, the component renders one cell with colspan = 2 when textSecondCell does not exist", () => {
    const { getByText } = render(<CourseListRow isHeader={true} textFirstCell="first cell test" />);
    
    const thElement = getByText("first cell test");
    expect(thElement).toBeInTheDocument();
    expect(thElement.colSpan).toEqual(2);
  });

  it("When isHeader is true, the component renders two cells when textSecondCell is present", () => {
    const { getByText } = render(<CourseListRow isHeader={true} textFirstCell="first cell test" textSecondCell="second cell test" />);
    
    const firstCell = getByText("first cell test");
    const secondCell = getByText("second cell test");
    
    expect(firstCell).toBeInTheDocument();
    expect(secondCell).toBeInTheDocument();
  });

  it("When isHeader is false, the component renders correctly two td elements within a tr element", () => {
    const { getByText } = render(<CourseListRow isHeader={false} textFirstCell="first cell test" textSecondCell="second cell test" />);
    
    const firstCell = getByText("first cell test");
    const secondCell = getByText("second cell test");
    
    expect(firstCell).toBeInTheDocument();
    expect(secondCell).toBeInTheDocument();
  });
});
