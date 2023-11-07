import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "./App";
import { fireEvent } from "@testing-library/react";

// Mock the alert function
global.alert = jest.fn();

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders without crashing", () => {
  act(() => {
    render(<App />, container);
  });

  expect(container).toBeDefined();
});

it("should render Notifications component", () => {
  act(() => {
    render(<App />, container);
  });

  expect(container.querySelector("Notifications")).toBeNull();
});

it("should render Header component", () => {
  act(() => {
    render(<App />, container);
  });

  expect(container.querySelector("Header")).not.toBeNull();
});

it("should render Login Component", () => {
  act(() => {
    render(<App />, container);
  });

  expect(container.querySelector("Login")).not.toBeNull();
});

it("should render Footer Component", () => {
  act(() => {
    render(<App />, container);
  });

  expect(container.querySelector("Footer")).not.toBeNull();
});

it("does not render courselist if logged out", () => {
  act(() => {
    render(<App isLoggedIn={false} />, container);
  });

  expect(container.querySelector("CourseList")).toBeNull();
});

it("renders courselist if logged in", () => {
  act(() => {
    render(<App isLoggedIn={true} />, container);
  });

  expect(container.querySelector("CourseList")).toBeNull();
  expect(container.querySelector("Login")).toBeNull();
});

describe("When ctrl + h is pressed", () => {
  it("calls logOut function", () => {
    const logOutMock = jest.fn();

    act(() => {
      render(<App logOut={logOutMock} />, container);
    });

    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(logOutMock).toHaveBeenCalledTimes(1);
  });

  it("checks that alert function is called", () => {
    act(() => {
      render(<App />, container);
    });

    const spy = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('checks that the alert is "Logging you out"', () => {
    act(() => {
      render(<App />, container);
    });

    const spy = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalledWith("Logging you out");
    spy.mockRestore();
  });
});

afterAll(() => {
  jest.restoreAllMocks();
  global.alert.mockClear();
});
