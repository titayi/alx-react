import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";

describe("App tests", () => {
  it("renders without crashing", () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
  });

  it("should render Notifications component", () => {
    const { getByTestId } = render(<App />);
    const notifications = getByTestId("notifications-component");
    expect(notifications).toBeInTheDocument();
  });

  it("should render Header component", () => {
    const { getByTestId } = render(<App />);
    const header = getByTestId("header-component");
    expect(header).toBeInTheDocument();
  });

  it("should render Footer component", () => {
    const { getByTestId } = render(<App />);
    const footer = getByTestId("footer-component");
    expect(footer).toBeInTheDocument();
  });

  it("does not render Login component if not logged in", () => {
    const { queryByTestId } = render(<App />);
    const login = queryByTestId("login-component");
    expect(login).toBeNull();
  });

  it("renders CourseList component if logged in", () => {
    const { getByTestId, queryByTestId } = render(<App isLoggedIn={true} />);
    const courseList = getByTestId("courselist-component");
    const login = queryByTestId("login-component");
    expect(courseList).toBeInTheDocument();
    expect(login).toBeNull();
  });
});
