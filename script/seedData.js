require('dotenv').config({ path: '../.env' });

const faker = require('faker');

const db = require('../src/config/db');

const { FoodItem } = require('../src/models/index');

db.once('open', async () => {
  await seedFoodItems();
  process.exit(0);
});

db.on('error', error => {
  console.error('\x1b[31m', error);
  process.exit(0);
});

const seedFoodItems = async () => {
  try {
    const types = ['lunch', 'breakfast'];

    const promisses = Array(10)
      .fill()
      .map(a =>
        FoodItem.create({
          name: faker.name.findName(),
          type: types[Math.floor(Math.random() * types.length)]
        })
      );

    await Promise.all(promisses);

    console.log('\x1b[32m', 'Successfully created food items');
  } catch (error) {
    console.error(error);
  }
};
