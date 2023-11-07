import React from "react";
import { render } from "@testing-library/react";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

describe("CourseList component tests", () => {
  it("should render without crashing", () => {
    const { container } = render(<CourseList />);
    expect(container).toBeDefined();
  });

  it("renders 5 different rows", () => {
    const { getAllByText, getByText } = render(<CourseList listCourses={listCourses} />);
    expect(getAllByText("Course name").length).toBe(2);
    expect(getAllByText("Credit").length).toBe(1);
    expect(getByText("ES6")).toBeInTheDocument();
    expect(getByText("Webpack")).toBeInTheDocument();
    expect(getByText("React")).toBeInTheDocument();
    expect(getByText("60")).toBeInTheDocument();
    expect(getByText("20")).toBeInTheDocument();
    expect(getByText("40")).toBeInTheDocument();
  });

  it("renders correctly when passed a list of courses", () => {
    const { getByText } = render(<CourseList listCourses={listCourses} />);
    expect(getByText("ES6")).toBeInTheDocument();
    expect(getByText("Webpack")).toBeInTheDocument();
    expect(getByText("React")).toBeInTheDocument();
    expect(getByText("60")).toBeInTheDocument();
    expect(getByText("20")).toBeInTheDocument();
    expect(getByText("40")).toBeInTheDocument();
  });
});
