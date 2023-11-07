import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: getLatestNotification() },
];

describe('Notification tests', () => {
  it('renders Notification component without crashing', () => {
    const { container } = render(<Notifications />);
    expect(container).toBeDefined();
  });

  it('renders correct list items', () => {
    const { getByTestId, getAllByTestId } = render(
      <Notifications displayDrawer={true} listNotifications={listNotifications} />
    );
    const ul = getByTestId('notification-list');
    const notificationItems = getAllByTestId('notification-item');
    expect(ul).toBeInTheDocument();
    expect(notificationItems.length).toBe(listNotifications.length);
  });

  it('renders an unordered list', () => {
    const { getByTestId, getAllByTestId } = render(
      <Notifications displayDrawer={true} listNotifications={listNotifications} />
    );
    const ul = getByTestId('notification-list');
    const notificationItems = getAllByTestId('notification-item');
    expect(ul.tagName).toBe('UL');
    expect(notificationItems.length).toBe(listNotifications.length);
  });

  it('renders correct text', () => {
    const { queryByText } = render(<Notifications displayDrawer={true} />);
    const text = queryByText('Here is the list of notifications');
    expect(text).toBeNull();
  });

  it('displays menu item when displayDrawer is false', () => {
    const { getByTestId } = render(<Notifications displayDrawer={false} />);
    const menuItem = getByTestId('menu-item');
    expect(menuItem).toBeInTheDocument();
    expect(menuItem.innerHTML).toContain('Your notifications');
  });

  it('does not display notifications when displayDrawer is false', () => {
    const { queryByTestId } = render(<Notifications displayDrawer={false} />);
    const notifications = queryByTestId('notifications');
    expect(notifications).toBeNull();
  });

  it('does not display menu item when displayDrawer is true', () => {
    const { queryByTestId } = render(<Notifications displayDrawer={true} />);
    const menuItem = queryByTestId('menu-item');
    expect(menuItem).toBeNull();
  });

  it('displays notifications when displayDrawer is true', () => {
    const { getByTestId } = render(<Notifications displayDrawer={true} />);
    const notifications = getByTestId('notifications');
    expect(notifications).toBeInTheDocument();
  });

  it('renders correctly when listNotifications is not passed', () => {
    const { getByTestId } = render(<Notifications displayDrawer={true} />);
    const notificationItem = getByTestId('notification-item-0');
    expect(notificationItem.innerHTML).toContain('No new notification for now');
  });

  it('renders correctly when empty array is passed', () => {
    const { getByTestId } = render(
      <Notifications displayDrawer={true} listNotifications={[]} />
    );
    const notificationItem = getByTestId('notification-item-0');
    expect(notificationItem.innerHTML).toContain('No new notification for now');
  });

  it('renders correctly when listNotifications is passed and with the right number of notifications', () => {
    const { getAllByTestId } = render(
      <Notifications displayDrawer={true} listNotifications={listNotifications} />
    );
    const notificationItems = getAllByTestId('notification-item');
    expect(notificationItems.length).toBe(listNotifications.length);
  });

  it('renders "No new notifications for now" instead of "Here is the list of notifications" when listNotifications is empty', () => {
    const { queryByText } = render(
      <Notifications displayDrawer={true} listNotifications={[]} />
    );
    const text = queryByText('Here is the list of notifications');
    expect(text).toBeNull();
  });

  it('does not re-render when the list passed as prop is the same', () => {
    const { getByTestId, rerender } = render(
      <Notifications displayDrawer={true} listNotifications={listNotifications} />
    );

    const notificationItem = getByTestId('notification-item-0');
    const initialHTML = notificationItem.innerHTML;

    rerender(
      <Notifications displayDrawer={true} listNotifications={listNotifications} />
    );

    const notificationItemUpdated = getByTestId('notification-item-0');
    const updatedHTML = notificationItemUpdated.innerHTML;

    expect(initialHTML).toBe(updatedHTML);
  });

  it('re-renders if listNotifications is changed', () => {
    const newListNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'default', html: getLatestNotification() },
      { id: 4, type: 'default', value: 'Foo' },
    ];

    const { getByTestId, rerender } = render(
      <Notifications displayDrawer={true} listNotifications={listNotifications} />
    );

    const initialNotificationItems = getByTestId('notification-list').children;
    expect(initialNotificationItems.length).toBe(listNotifications.length);

    rerender(
      <Notifications displayDrawer={true} listNotifications={newListNotifications} />
    );

    const updatedNotificationItems = getByTestId('notification-list').children;
    expect(updatedNotificationItems.length).toBe(newListNotifications.length);
  });
});

describe('onClick event behaves as it should', () => {
  it('should call markAsRead when a notification is clicked', () => {
    const { getByTestId } = render(
      <Notifications displayDrawer={true} listNotifications={listNotifications} />
    );
    const notificationItem = getByTestId('notification-item-0');
    const markAsReadSpy = jest.spyOn(Notifications.prototype, 'markAsRead');

    fireEvent.click(notificationItem);

    expect(markAsReadSpy).toHaveBeenCalledTimes(1);
    expect(markAsReadSpy).toHaveBeenCalledWith(listNotifications[0].id);

    markAsReadSpy.mockRestore();
  });
});
