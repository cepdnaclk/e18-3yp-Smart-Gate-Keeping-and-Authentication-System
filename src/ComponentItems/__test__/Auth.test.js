import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import Signin from "../Sign/Auth";

describe("Test the Signin component", () => {
    test("render the signup form with 2 button", async () => {
        render(<Signin />);
        const buttonList = await screen.findAllByRole("Button");
        expect(buttonList).toHaveLength(1);
        // console.log(buttonList);
    });
});