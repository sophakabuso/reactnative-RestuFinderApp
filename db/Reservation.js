const { DataTypes, Model } = require('sequelize');
const sequelize = require('./connection');

class Reservation extends Model {}

try {
    Reservation.init({
        userId: DataTypes.INTEGER,
        restaurantId: DataTypes.INTEGER,
        date: DataTypes.DATE,
        time: DataTypes.TIME,
        guests: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Reservation'
    });
} catch (error) {
    console.error('Failed to initialize Reservation model:', error);
}

module.exports = Reservation;