import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import Signup from "../Sign/Signup";

describe("Test the Signup component", () => {
    test("render the signup form with 2 button", async () => {
        render(<Signup />);
        const buttonList = await screen.findAllByRole("Button");
        expect(buttonList).toHaveLength(1);
    });
});

