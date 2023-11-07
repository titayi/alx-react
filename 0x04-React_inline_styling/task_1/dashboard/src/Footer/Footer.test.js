import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';
import { getFullYear, getFooterCopy } from '../utils/utils';

describe('Footer test', () => {
  it('should render without crashing', () => {
    const { container } = render(<Footer />);
    expect(container).toBeDefined();
  });

  it('should render the text "Copyright" with the current year and footer copy', () => {
    const { getByText } = render(<Footer />);
    const copyrightText = getByText(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
    expect(copyrightText).toBeInTheDocument();
  });
});
