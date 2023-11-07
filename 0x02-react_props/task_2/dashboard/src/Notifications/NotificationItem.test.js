import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('rendering components', () => {
  it('renders NotificationItem component without crashing', () => {
    const { container } = render(<NotificationItem />);
    expect(container).toBeDefined();
  });

  it('renders correct HTML from type="default" and value="test" props', () => {
    const { getByText, getByTestId } = render(
      <NotificationItem type="default" value="test" />
    );

    const listItem = getByTestId('notification-item');
    const typeAttribute = listItem.getAttribute('data-notification-type');
    expect(typeAttribute).toBe('default');

    const renderedValue = getByText('test');
    expect(renderedValue).toBeInTheDocument();
  });

  it('renders correct HTML from html="<u>test</u>" props', () => {
    const { getByText, getByTestId } = render(
      <NotificationItem html={{ __html: '<u>test</u>' }} />
    );

    const listItem = getByTestId('notification-item');
    const urgentAttribute = listItem.getAttribute('data-urgent');
    expect(urgentAttribute).toBe('true');

    const renderedValue = getByText('test');
    const renderedHtml = getByText('test').getElementsByTagName('u')[0];
    expect(renderedValue).toBeInTheDocument();
    expect(renderedHtml).toBeInTheDocument();
  });
});
