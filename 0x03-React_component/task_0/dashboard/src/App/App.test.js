import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Test App.js', () => {
  let container;

  beforeEach(() => {
    container = render(<App />);
  });

  it('Renders App without crashing', () => {
    expect(container).toBeDefined();
  });

  it('App component contains Notifications component', () => {
    expect(container.getByTestId("Notifications")).toBeInTheDocument();
  });

  it('App component contains Header component', () => {
    expect(container.getByTestId("Header")).toBeInTheDocument();
  });

  it('App component contains Login component', () => {
    expect(container.getByTestId("Login")).toBeInTheDocument();
  });

  it('App component contains Footer component', () => {
    expect(container.getByTestId("Footer")).toBeInTheDocument();
  });

  it('test to check that CourseList is not displayed inside App', () => {
    expect(container.queryByTestId("CourseList")).not.toBeInTheDocument();
  });
});

describe("Testing <App isLoggedIn={true} />", () => {
  let container;

  beforeEach(() => {
    container = render(<App isLoggedIn={true} />);
  });

  it("the Login component is not included", () => {
    expect(container.queryByTestId('Login')).not.toBeInTheDocument();
  });

  it("the CourseList component is included", () => {
    expect(container.queryByTestId('CourseList')).toBeInTheDocument();
  });
});
