import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";
import Navbar from "../Navbar";
import NavLink from "../NavLink";

describe("Navbar", () => {
  it("should render the 'Sebastian Lib' heading", () => {
    render(<Navbar />);

    const header = screen.getByRole("heading", {
      name: "Sebastian Lib",
    });

    expect(header).toBeInTheDocument();
  });

  it("should render the 'Home' link", () => {
    render(
      <NavLink
        key={1}
        index={1}
        link={{ label: "Home", href: "#home" }}
        hoveredItem={2}
      />
    );

    const link = screen.getByRole("link", {
      name: "Home",
    });

    expect(link).toBeInTheDocument();
  });
});
