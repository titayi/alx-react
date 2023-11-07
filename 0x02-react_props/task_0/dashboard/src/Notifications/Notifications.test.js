import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

it('renders without crashing', () => {
  render(<Notifications />);
});

it('renders three list items', () => {
  const { getAllByRole } = render(<Notifications />);
  const listItems = getAllByRole('listitem');
  expect(listItems).toHaveLength(3);
});

it('renders the <p>', () => {
  const { getByText } = render(<Notifications />);
  const paragraph = getByText('Here is the list of notifications');
  expect(paragraph).toBeInTheDocument();
});
