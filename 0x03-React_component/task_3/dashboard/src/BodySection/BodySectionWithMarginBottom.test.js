import React from "react";
import { render } from "@testing-library/react";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

describe("Testing BodySectionWithMarginBottom Component", () => {
  it("should render the BodySection component and pass props correctly", () => {
    const { getByText } = render(
      <BodySectionWithMarginBottom title="test title">
        <p>test children</p>
      </BodySectionWithMarginBottom>
    );

    const bodySection = getByText("test title");
    const p = getByText("test children");

    expect(bodySection).toBeInTheDocument();
    expect(p).toBeInTheDocument();
  });
});
