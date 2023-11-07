import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import NotificationItem from "./NotificationItem";

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

describe("rendering components", () => {
  it("renders NotificationItem component without crashing", () => {
    act(() => {
      render(<NotificationItem />, container);
    });

    expect(container.querySelector("li")).not.toBeNull();
  });

  it('renders correct HTML from type="default" and value="test" props', () => {
    act(() => {
      render(<NotificationItem type="default" value="test" />, container);
    });

    expect(container.querySelector("li").getAttribute("data-notification-type")).toBe("default");
    expect(container.querySelector("li").textContent).toBe("test");
  });

  it('renders correct HTML from html="<u>test</u>" props', () => {
    act(() => {
      render(<NotificationItem html="<u>test</u>" />, container);
    });

    expect(container.querySelector("li").getAttribute("data-urgent")).toBe("true");
    expect(container.querySelector("li").innerHTML).toBe("<u>test</u>");
  });
});

describe("onclick event behaves as it should", () => {
  it("should call markAsRead with the correct ID", () => {
    const markAsRead = jest.fn();

    act(() => {
      render(<NotificationItem value="test item" markAsRead={markAsRead} id={1} />, container);
    });

    const notificationItem = container.querySelector("li");
    act(() => {
      notificationItem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(markAsRead).toHaveBeenCalledTimes(1);
    expect(markAsRead).toHaveBeenCalledWith(1);
  });
});
