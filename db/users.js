const { DataTypes, Model } = require('sequelize');
const sequelize = require('./connection');

class User extends Model {}

try {
    User.init({
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User'
    });
} catch (error) {
    console.error('Failed to initialize User model:', error);
}

module.exports = User;