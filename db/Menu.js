const { DataTypes, Model } = require('sequelize');
const sequelize = require('./connection');

class Menu extends Model {}

try {
    Menu.init({
        name: DataTypes.STRING,
        price: DataTypes.FLOAT,
        ingredients: DataTypes.STRING,
        restaurantId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Menu'
    });
} catch (error) {
    console.error('Failed to initialize Menu model:', error);
}

module.exports = Menu;