import apiProducts from "../../pages/api/products";

describe("Api of products", () => {
    let req;
    let res;

    beforeEach(() => {
        req = {};
        res = {
            status: jest.fn(() => res),
            json: jest.fn(),
        }
    })
    
    it('Should return 200', async () => {
        req.method = 'GET';
        await apiProducts(req, res);

        expect(res.status).toBeCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(expect.any(Array));
    });
});
