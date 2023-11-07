import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
  it('should render without crashing', () => {
    const { container } = render(<Login />);
    expect(container).toBeDefined();
  });

  it('should have 2 input tags and 2 label tags', () => {
    const { getAllByRole } = render(<Login />);
    const inputElements = getAllByRole('textbox');
    const labelElements = getAllByRole('textbox', { name: '' });
    expect(inputElements).toHaveLength(2);
    expect(labelElements).toHaveLength(2);
  });
});
