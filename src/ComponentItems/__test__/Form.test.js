import React from "react";
import { render, screen } from "@testing-library/react";
import Form from "../Form/Form";

describe("Test the Form Component", () => {

    test("email input field should accept email ", () => {
        render(<Form />);
        const email = screen.getByLabelText("Email:");
        userEvent.type(email, "dipesh");
        expect(email.value).not.toMatch("dipesh.malvia@gmail.com");
    });

    test("password input should have type password ", () => {
        render(<Form />);
        const password = screen.getByLabelText("Password:");
        expect(password).toHaveAttribute("type", "password");
      });

      test("should display alert if error", () => {
        render(<Form />);
        const email = screen.getByLabelText("Email:");
        const password = screen.getByLabelText("Password:");
    
        userEvent.type(email, "dipesh");
        userEvent.type(password, "123456");
        
        const error = screen.getByText("Email is not valid");
        expect(error).toBeInTheDocument();
      });
    
      test("should be able to submit the form", () => {

        render(<Form/>);
        const email = screen.getByPlaceholderText("Enter email");
        const password = screen.getByPlaceholderText("Password");
    
        userEvent.type(email, "dipesh@gmail.com");
        userEvent.type(password, "123456");
    
        const user = screen.getByText("dipesh@gmail.com");
        expect(user).toBeInTheDocument();
      });
});