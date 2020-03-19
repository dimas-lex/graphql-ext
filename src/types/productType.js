module.exports = `
  type Product {
    id: ID!
    description: String
    price: Int 
  }

  type Query {
    products: [Product] 
  }
`;