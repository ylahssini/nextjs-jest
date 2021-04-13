import React from "react";
import * as SWR from "swr";
import HomePage from "@pages";
import { render, screen } from "./testing";

jest.spyOn(SWR, "default");

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve([{ id: 5, name: 'Phone', price: 15.45 }]),
    })
);

describe("Pages", () => {
    describe("Home page", () => {
        it("Should render without throwing an error", async () => {
            await (await fetch()).json();

            const { findByRole } = render(<HomePage />);
            const heading = await findByRole("heading");
            const list = await findByRole('list');

            expect(heading).toBeInTheDocument();
            expect(list).toBeInTheDocument();
        });
    });
});
