const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const { getFoodItems, getFoodItem, createFoodItem, updateFoodItem, deleteFoodItem } = require('./api/foodItem');

var schema = buildSchema(`
  type FoodItem {
    _id: String!,
    name: String!,
    type: String!,
  },
  type Query {
    hello: String,
    foodItems: [FoodItem!]!,
    foodItem(id: String!): FoodItem,
  }
  type Mutation {
    createFoodItem(name: String!, type: String!): FoodItem!,
    updateFoodItem(id: String!, name: String!, type: String!): FoodItem!,
    deleteFoodItem(id: String!): FoodItem!,
  }
`);

// Root resolver
const root = {
  hello: () => 'Hello world!',
  foodItems: async () => await getFoodItems(),
  foodItem: async ({ id }) => await getFoodItem(id),
  createFoodItem: async ({ name, type }) => await createFoodItem(name, type),
  updateFoodItem: async ({ id, name, type }) => await updateFoodItem(id, name, type),
  deleteFoodItem: async ({ id }) => await deleteFoodItem(id)
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
