import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';

describe('Notification tests', () => {
  it('renders Notification component without crashing', () => {
    const { container } = render(<Notifications />);
    expect(container).toBeDefined();
  });

  it('renders correct list items', () => {
    const { getAllByText } = render(<Notifications />);
    const notificationItems = getAllByText(/New course available|New resume available/g);
    expect(notificationItems).toHaveLength(2);

    const latestNotification = getAllByText(getLatestNotification());
    expect(latestNotification).toHaveLength(1);
  });

  it('renders an unordered list', () => {
    const { getAllByRole } = render(<Notifications />);
    const listItems = getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });

  it('renders correct text', () => {
    const { getByText } = render(<Notifications />);
    const paragraph = getByText('Here is the list of notifications');
    expect(paragraph).toBeInTheDocument();
  });
});
