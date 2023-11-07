import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('should render without crashing', () => {
    const { container } = render(<Header />);
    expect(container).toBeDefined();
  });

  it('should render an img and an h1', () => {
    const { getByRole, getByText } = render(<Header />);
    const img = getByRole('img');
    const h1 = getByText('School dashboard');
    expect(img).toBeInTheDocument();
    expect(h1).toBeInTheDocument();
  });
});
