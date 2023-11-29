const express = require('express');
const cors = require('cors'); // Add this line
const User = require('./db/User');
const Restaurant = require('./db/Restaurant');
const Menu = require('./db/Menu');
const Reservation = require('./db/Reservation');
const passport = require('passport');

const app = express();

app.use(express.json()); // for parsing application/json
app.use(passport.initialize());

app.use(cors({
    origin: 'http://localhost:3000', // Corrected the typo here
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

// Route to get all restaurants
app.get('/restaurants', async (req, res) => {
    try {
        const restaurants = await Restaurant.findAll();
        res.json(restaurants);
    } catch (error) {
        console.error('Failed to get restaurants:', error);
        res.status(500).json({ error: 'Failed to get restaurants' });
    }
});

// Route to get restaurant details by ID
app.get('/restaurants/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const restaurant = await Restaurant.findByPk(id);
        if (!restaurant) {
            res.status(404).json({ error: 'Restaurant not found' });
            return;
        }
        res.json(restaurant);
    } catch (error) {
        console.error('Failed to get restaurant details:', error);
        res.status(500).json({ error: 'Failed to get restaurant details' });
    }
});

// ... Add more routes for menus, reservations, etc.

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
