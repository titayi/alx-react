import React from "react";
import { render } from "@testing-library/react";
import BodySection from "./BodySection";

describe("Testing BodySection Component", () => {
  it("should render the title and children correctly", () => {
    const { getByText } = render(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    const h2 = getByText("test title");
    const p = getByText("test children node");

    expect(h2).toBeInTheDocument();
    expect(p).toBeInTheDocument();
  });
});
