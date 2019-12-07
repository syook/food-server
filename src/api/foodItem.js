const { FoodItem } = require('../models');

const getFoodItems = async () => {
  try {
    return await FoodItem.find({});
  } catch (error) {
    throw error;
  }
};

const getFoodItem = async id => {
  try {
    throw new Error('test error');
    return await FoodItem.findById(id);
  } catch (error) {
    throw error;
  }
};

const createFoodItem = async name => {
  try {
    return await FoodItem.create({ name });
  } catch (error) {
    throw error;
  }
};

const updateFoodItem = async (id, name) => {
  try {
    return await FoodItem.findByIdAndUpdate(id, { name }, { new: true });
  } catch (error) {
    throw error;
  }
};

const deleteFoodItem = async id => {
  try {
    return await FoodItem.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getFoodItems,
  getFoodItem,
  createFoodItem,
  updateFoodItem,
  deleteFoodItem
};
