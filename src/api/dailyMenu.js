const { DailyMenu } = require('../models');

const getAllMenus = async () => {
  try {
    return await DailyMenu.find({});
  } catch (error) {
    throw error;
  }
};

const getDaily = async id => {
  try {
    return await DailyMenu.findById(id);
  } catch (error) {
    throw error;
  }
};

const createDailyMenu = async ({ date, breakfastItems, lunchItems, usersData }) => {
  try {
    return await DailyMenu.create({ date, breakfastItems, lunchItems, usersData });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateDailyMenu = async ({ id, date, breakfastItems, lunchItems, usersData }) => {
  try {
    return await DailyMenu.findByIdAndUpdate(id, { date, breakfastItems, lunchItems, usersData }, { new: true });
  } catch (error) {
    throw error;
  }
};

const deleteDailyMenu = async id => {
  try {
    return await DailyMenu.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllMenus,
  getDaily,
  createDailyMenu,
  updateDailyMenu,
  deleteDailyMenu
};
