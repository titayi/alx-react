import React from "react";
import { render, unmountComponentAtNode } from "@testing-library/react";
import WithLogging from "./WithLogging";

const TestComponent = () => <p>Test Component</p>;

describe("WithLogging tests", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("should call console.log on mount and dismount", () => {
    const NewComponent = WithLogging(TestComponent);
    const { unmount } = render(<NewComponent />);
    
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    
    unmount();

    expect(consoleSpy).toHaveBeenCalledTimes(2);
  });

  it("should log out the right message on mount and on unmount", () => {
    const NewComponent = WithLogging(TestComponent);
    render(<NewComponent />);
    
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith("Component TestComponent is mounted");

    unmountComponentAtNode(document.body);

    expect(consoleSpy).toHaveBeenCalledTimes(2);
    expect(consoleSpy).toHaveBeenCalledWith("Component TestComponent is going to unmount");
  });
});
