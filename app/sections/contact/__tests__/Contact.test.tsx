// import { fireEvent, render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/jest-globals";
// import "@testing-library/jest-dom";
// import { act } from "react-dom/test-utils";
// import Contact from "../Contact";

// jest.mock('framer-motion', () => ({
//     ...jest.requireActual('framer-motion'), // Preserve all actual exports
//     motion: {
//       div: ({ children, ...rest }) => <div {...rest}>{children}</div>, // Mock motion.div component
//     },
//   }));

// describe("Send a message", () => {
//   describe("with valid inputs", () => {
//     it("calls the onSubmit function", async () => {
//       const onSubmit = jest.fn();

//       const { getByLabelText, getByRole } = render(<Contact />);
//       await act(async () => {
//         fireEvent.change(getByLabelText("Full Name"), {
//           target: { value: "Sebastian Lib" },
//         });
//         fireEvent.change(getByLabelText("Email"), {
//           target: { value: "sebastianlib2@gmail.com" },
//         });
//         fireEvent.change(getByLabelText("Message"), {
//           target: { value: "siema siema co tam" },
//         });
//       });

//       await act(async () => {
//         fireEvent.submit(getByRole("button"));
//       });

//       expect(getByRole("button")).toHaveBeenCalled();
//     });
//   });

//   describe("with invalid name", () => {
//     it("renders the name validation error", () => {
//     });
//   });

//   describe("with invalid email", () => {
//     it("renders the email validation error", async () => {
//       const { getByLabelText, container } = render(<Contact />);
//       await act(async () => {
//         const emailInput = getByLabelText("Email");
//         fireEvent.change(emailInput, { target: { value: "invalid email" } });
//         fireEvent.blur(emailInput)
//     });
//     const errorMessage = screen.getByText("Invalid email");
//     expect(errorMessage).toBeInTheDocument();
//     });
//   });

//   describe("with invalid message", () => {
//     it("renders the message validation error", () => {
//       // Add your test case for message validation error here
//     });
//   });
// });
