import React from "react";
import { render } from "@testing-library/react";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";

describe("Notification tests", () => {
  it("renders Notification component without crashing", () => {
    const { container } = render(<Notifications />);
    expect(container).toBeDefined();
  });

  it("renders correct list items", () => {
    const { getByTestId, getAllByRole } = render(<Notifications displayDrawer={true} />);
    const notificationsList = getByTestId("notification-list");
    const notificationItems = getAllByRole("listitem");
    expect(notificationsList).toBeInTheDocument();
    expect(notificationItems).toHaveLength(3);

    const expectedNotifications = [
      "New course available",
      "New resume available",
      getLatestNotification(),
    ];

    notificationItems.forEach((item, index) => {
      expect(item).toHaveAttribute("data-notification-type", index === 2 ? "urgent" : "default");
      expect(item.textContent).toBe(expectedNotifications[index]);
    });
  });

  it("renders correct text", () => {
    const { getByText } = render(<Notifications displayDrawer={true} />);
    const textElement = getByText("Here is the list of notifications");
    expect(textElement).toBeInTheDocument();
  });

  it("displays menu item when displayDrawer is false", () => {
    const { getByTestId } = render(<Notifications displayDrawer={false} />);
    const menuItem = getByTestId("menu-item");
    expect(menuItem).toBeInTheDocument();
    expect(menuItem.textContent).toBe("Your notifications");
  });

  it("does not display notifications when displayDrawer is false", () => {
    const { queryByTestId } = render(<Notifications displayDrawer={false} />);
    const notificationsList = queryByTestId("notification-list");
    expect(notificationsList).toBeNull();
  });

  it("does not display menu item when displayDrawer is true", () => {
    const { queryByTestId } = render(<Notifications displayDrawer={true} />);
    const menuItem = queryByTestId("menu-item");
    expect(menuItem).toBeNull();
  });

  it("displays Notifications when displayDrawer is true", () => {
    const { getByTestId } = render(<Notifications displayDrawer={true} />);
    const notificationsList = getByTestId("notification-list");
    expect(notificationsList).toBeInTheDocument();
  });
});
