import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

describe("Hero", () => {
  describe("LeftSide", () => {
    it("should have the 'frontend developer' text", () => {
      render(<LeftSide />);
      const text = screen.getByText("frontend developer");
      expect(text).toBeInTheDocument();
    });

    it("should render the 'Sebastian Lib' heading", () => {
      render(<LeftSide />);

      const header = screen.getByRole("heading", {
        name: "Sebastian Lib",
      });

      expect(header).toBeInTheDocument();
    });
  });

  describe("RightSide", () => {

    it("should render img with alt text 'person'", () => {
      render(<RightSide />);
      const image = screen.getByAltText("person");
      expect(image).toBeInTheDocument();
    });

    it("should render the 'Sebastian Lib' text", () => {
        render(<RightSide />);
  
        const text = screen.getByText("CV");
  
        expect(text).toBeInTheDocument();
      });
  });
});
