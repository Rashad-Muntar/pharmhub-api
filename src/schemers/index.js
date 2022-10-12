const { gql } = require("apollo-server-express");
const user = require("./user");

module.exports = gql`
  type Query {
    products: [Product]!
    users: [User]
  }
  type User {
    name: String
    contact: String
    location: String
    Orders: [Product]
  }
  type Product {
    trade_name: String!
    generic_name: String!
    brand: String!
    price: Int!
    serial_Num: String!
    picture: String!
    description: String!
    usage: String!
    composition: String!
  }
`;
