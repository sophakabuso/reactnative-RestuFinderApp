const { DataTypes, Model } = require('sequelize');
const sequelize = require('./connection');

class Restaurant extends Model {}

try {
    Restaurant.init({
        name: DataTypes.STRING,
        location: DataTypes.STRING,
        rating: DataTypes.FLOAT
    }, {
        sequelize,
        modelName: 'Restaurant'
    });
} catch (error) {
    console.error('Failed to initialize Restaurant model:', error);
}

module.exports = Restaurant;