import React from "react";
import HomePage from "@pages";
import { render } from "./testing";

describe("Pages", () => {
    describe("Home page", () => {
        it("Should render without throwing an error", async () => {
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    json: () => Promise.resolve([{ id: 5, name: 'Phone', price: 15.45 }]),
                })
            );

            await (await fetch()).json();

            const { findByRole } = render(<HomePage />);
            const heading = await findByRole("heading");
            const list = await findByRole('list');

            expect(heading).toBeInTheDocument();
            expect(list).toBeInTheDocument();
        });

        it('Should render empty message', async () => {
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    json: () => Promise.resolve([]),
                })
            );

            await (await fetch()).json();

            const { findByRole } = render(<HomePage />);
            const empty = await findByRole('empty');

            expect(empty).toBeInTheDocument();
        });

        it('Should render error message', async () => {
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    status: 500,
                })
            );

            await (await fetch()).status;

            const { findByRole } = render(<HomePage />);
            const error = await findByRole('error');

            expect(error).toBeInTheDocument();
        });
    });
});
