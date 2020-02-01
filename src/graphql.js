const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const { getFoodItems, getFoodItem, createFoodItem, updateFoodItem, deleteFoodItem } = require('./api/foodItem');
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('./api/user');

var schema = buildSchema(`
  type FoodItem {
    _id: ID!,
    name: String!,
    type: String!,
  },
  type User {
    _id: ID!,
    name: String!,
    email: String!,
    mobile: String!,
    chapatiCount: Int!,
  },
  type Query {
    hello: String,
    foodItems: [FoodItem!]!,
    foodItem(id: String!): FoodItem,
    users: [User!]!,
    user(id: String!): User,
  }
  type Mutation {
    createFoodItem(name: String!, type: String!): FoodItem!,
    updateFoodItem(id: ID!, name: String!, type: String!): FoodItem!,
    deleteFoodItem(id: ID!): FoodItem!,
    createUser(name: String!, email: String!, mobile: String!, chapatiCount: Int!): User!,
    updateUser(id: ID!, name: String!, email: String!, mobile: String!, chapatiCount: Int!): User!,
    deleteUser(id: ID!): User!,
  }
`);

// Root resolver
const root = {
  hello: () => 'Hello world!',
  foodItems: async () => await getFoodItems(),
  foodItem: async ({ id }) => await getFoodItem(id),
  createFoodItem: async ({ name, type }) => await createFoodItem(name, type),
  updateFoodItem: async ({ id, name, type }) => await updateFoodItem(id, name, type),
  deleteFoodItem: async ({ id }) => await deleteFoodItem(id),
  users: async () => await getUsers(),
  user: async ({ id }) => await getUser(id),
  createUser: async body => await createUser(body),
  updateUser: async body => await updateUser(body),
  deleteUser: async ({ id }) => await deleteUser(id)
};

const graphql = app => {
  app.use(
    '/',
    graphqlHTTP({
      schema: schema, // Must be provided
      rootValue: root,
      graphiql: true, // Enable GraphQL when server endpoint is accessed in browser
      customFormatErrorFn: err => ({ message: err.message, statusCode: 500 })
    })
  );
};

module.exports = graphql;

//   createProduct: args => {
//     const { name } = args;
//     const newProduct = addFoodItem(name);
//     return `Created: ${newProduct.id} ${newProduct.name} - ${newProduct.description}`;
//   }
