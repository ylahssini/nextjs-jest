// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.status(200).json([
        { id: 1, name: 'Smartphone', price: 150.55 },
        { id: 2, name: 'TV', price: 350.7 },
        { id: 3, name: 'Tablet', price: 241.1 },
    ])
}
