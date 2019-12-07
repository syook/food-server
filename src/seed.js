const moment = require('moment');
require('dotenv').config();


const {UserModel, FoodItemModel, DailyMenu} = require('./models')


const foodItem = [
    {
        name: 'poha',
        type: 'breakfast'
    },
    {
        name: 'rice',
        type: 'lunch'
    },

]

const dailyMenu = {
    date: moment().format('DD-MM-YY'),
    breakfastItems: [],
    lunchItems: [],
    userData: {}
}




const createUser = async () => {
    try {
        const user = {
            name: 'Amrendra',
            email: 'amrendra@syook.com',
            mobile: 99220609602,
            chapatiCount: 2,
        };
        const userData = await UserModel.create(user);
        return userData;
        
    } catch (error) {
        throw error
    }
}


const createFoodItems = async () => {
    try {
        let foodItemsArray = []
        for(let items of foodItem) {
            foodItemsArray.push(await FoodItemModel.create(items));
        }
        return foodItemsArray
    } catch (error) {
        throw error
    }
}


const createDailymenu = async() => {
    try {
        const user = await createUser();
        const items = await createFoodItems();
        dailyMenu.breakfastItems.push(items.find(obj => obj.type === 'breakfast')._id)
        dailyMenu.lunchItems.push(items.find(obj => obj.type === 'lunch')._id)
        dailyMenu.userData[user._id] = user;

        const menu = await DailyMenu.create(dailyMenu);
        console.log("TCL: createDailymenu -> menu", menu)

    } catch (error) {
        throw error
    }
}

 createDailymenu()