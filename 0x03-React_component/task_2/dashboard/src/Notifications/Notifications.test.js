import React from "react";
import { render } from "@testing-library/react";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotification() },
];

describe("Notification tests", () => {
  it("renders Notification component without crashing", () => {
    const { container } = render(<Notifications />);
    expect(container).toBeDefined();
  });

  it("renders correct list items", () => {
    const { container } = render(
      <Notifications displayDrawer={true} listNotifications={listNotifications} />
    );
    listNotifications.forEach((notification) => {
      const notificationItem = container.querySelector(`li[data-notification-type="${notification.type}"]`);
      expect(notificationItem).toBeInTheDocument();
      expect(notificationItem.textContent).toContain(notification.value);
    });
  });

  it("displays menu item when displayDrawer is false", () => {
    const { container } = render(<Notifications displayDrawer={false} />);
    const menuItem = container.querySelector("div.menuItem");
    expect(menuItem).toBeInTheDocument();
    expect(menuItem.textContent).toBe("Your notifications");
  });

  it("does not display notifications when displayDrawer is false", () => {
    const { container } = render(<Notifications displayDrawer={false} />);
    const notifications = container.querySelector("div.Notifications");
    expect(notifications).toBeNull();
  });

  it("does not display menuItem when displayDrawer is true", () => {
    const { container } = render(<Notifications displayDrawer={true} />);
    const menuItem = container.querySelector("div.menuItem");
    expect(menuItem).toBeNull();
  });

  it("displays Notifications when displayDrawer is true", () => {
    const { container } = render(<Notifications displayDrawer={true} />);
    const notifications = container.querySelector("div.Notifications");
    expect(notifications).toBeInTheDocument();
  });

  it("renders correctly when listNotifications is not passed", () => {
    const { getByText } = render(<Notifications displayDrawer={true} />);
    const noNotification = getByText("No new notification for now");
    expect(noNotification).toBeInTheDocument();
  });

  it("renders correctly when empty array is passed", () => {
    const { getByText } = render(<Notifications displayDrawer={true} listNotifications={[]} />);
    const noNotification = getByText("No new notification for now");
    expect(noNotification).toBeInTheDocument();
  });

  it("renders correctly when listNotifications is passed and with the right number of notifications", () => {
    const { container } = render(
      <Notifications displayDrawer={true} listNotifications={listNotifications} />
    );
    listNotifications.forEach((notification) => {
      const notificationItem = container.querySelector(`li[data-notification-type="${notification.type}"]`);
      expect(notificationItem).toBeInTheDocument();
      expect(notificationItem.textContent).toContain(notification.value);
    });
  });

  it('renders "No new notifications for now" instead of "Here is the list of notifications" when listNotifications is empty', () => {
    const { getByText, container } = render(<Notifications displayDrawer={true} listNotifications={[]} />);
    const noNotification = getByText("No new notification for now");
    expect(noNotification).toBeInTheDocument();
    const notificationsText = getByText("Here is the list of notifications");
    expect(notificationsText).not.toBeInTheDocument();
  });
});

describe("onclick event behaves as it should", () => {
  it("should call markAsRead with the correct ID", () => {
    const { container } = render(<Notifications />);
    const instance = container.querySelector("div.Notifications").querySelector(".menuItem");

    const markAsRead = jest.fn();
    instance.markAsRead = markAsRead;

    instance.markAsRead(1);

    expect(markAsRead).toHaveBeenCalledTimes(1);
    expect(markAsRead).toHaveBeenCalledWith(1);
  });
});
