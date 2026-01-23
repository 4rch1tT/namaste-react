// unit testing
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// describe -> used for grouping
describe("Contact Us page test case", () => {
  test("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    // This is known as assertion ⇩⇩⇩
    expect(heading).toBeInTheDocument();
  });

  // instead of test we can use "it" as well(it is common practice)
  it("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);

    // when we try to add more than one html element it acts as an array and they are react elements(objects).That's why we are using .length

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).not.toBe(3);
  });
});
