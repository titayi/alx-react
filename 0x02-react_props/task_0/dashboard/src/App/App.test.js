import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';

describe('App tests', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
  });

  it('should render Notifications component', () => {
    const { getByText } = render(<App />);
    const notifications = getByText('Notifications'); 
    expect(notifications).toBeInTheDocument();
  });

  it('should render Header component', () => {
    const { getByText } = render(<App />);
    const header = getByText('Your Header Text');
    expect(header).toBeInTheDocument();
  });

  it('should render Login Component', () => {
    const { getByText } = render(<App />);
    const login = getByText('Login');
    expect(login).toBeInTheDocument();
  });

  it('should render Footer component', () => {
    const { getByText } = render(<App />);
    const footer = getByText('Copyright');
    expect(footer).toBeInTheDocument();
  });
});
