import React from "react";
import { render } from "@testing-library/react";
import NotificationItem from "./NotificationItem";

describe("rendering components", () => {
  it("renders NotificationItem component without crashing", () => {
    const { container } = render(<NotificationItem />);
    expect(container).toBeDefined();
  });

  it('renders correct html from type="default" value="test" props', () => {
    const { container } = render(<NotificationItem type="default" value="test" />);
    expect(container.innerHTML).toEqual('<li data-notification-type="default">test</li>');
  });

  it('renders correct html from  html="<u>test</u>" props', () => {
    const { container } = render(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(container.innerHTML).toEqual('<li data-urgent="true"><u>test</u></li>');
  });
});
