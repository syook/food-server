const { User } = require('../models');

const getUsers = async () => {
  try {
    return await User.find({});
  } catch (error) {
    throw error;
  }
};

const getUser = async id => {
  try {
    return await User.findById(id);
  } catch (error) {
    throw error;
  }
};

const createUser = async ({ name, email, mobile, chapatiCount }) => {
  try {
    const user = await User.create({ name, email, mobile, chapatiCount });
    console.log('user', user);
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateUser = async ({ id, name, email, mobile, chapatiCount }) => {
  try {
    return await User.findByIdAndUpdate(id, { name, email, mobile, chapatiCount }, { new: true });
  } catch (error) {
    throw error;
  }
};

const deleteUser = async id => {
  try {
    return await User.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};
