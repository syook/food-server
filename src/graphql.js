const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const { getFoodItems, getFoodItem, createFoodItem, updateFoodItem, deleteFoodItem } = require('./api/foodItem');

var schema = buildSchema(`
  type FoodItem {
    _id: String!,
    name: String!,
  },
  type Query {
    hello: String,
    foodItems: [FoodItem!]!,
    foodItem(id: String!): FoodItem,
  }
  type Mutation {
    createFoodItem(name: String!): FoodItem!,
    updateFoodItem(id: String!, name: String!): FoodItem!,
    deleteFoodItem(id: String!): FoodItem!,
  }
`);

// Root resolver
const root = {
  hello: () => 'Hello world!',
  foodItems: async () => await getFoodItems(),
  foodItem: async ({ id }) => await getFoodItem(id),
  createFoodItem: async ({ name }) => await createFoodItem(name),
  updateFoodItem: async ({ id, name }) => await updateFoodItem(id, name),
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
