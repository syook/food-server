require('dotenv').config({ path: '../.env' });

const faker = require('faker');

const db = require('../src/config/db');

const { FoodItem, User } = require('../src/models/index');

db.once('open', async () => {
  await seedFoodItems();
  await seedUsers();
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

const seedUsers = async () => {
  try {
    const promisses = Array(10)
      .fill()
      .map(a =>
        User.create({
          name: faker.name.findName(),
          email: faker.internet.email(),
          mobile: faker.phone.phoneNumber(),
          chapatiCount: 2
        })
      );

    await Promise.all(promisses);

    console.log('\x1b[32m', 'Successfully created users');
  } catch (error) {
    console.error(error);
  }
};
