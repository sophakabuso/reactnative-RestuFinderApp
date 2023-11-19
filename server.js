const express = require('express');
const User = require('./db/User');
const Restaurant = require('./db/Restaurant');
const Menu = require('./db/Menu');
const Reservation = require('./db/Reservation');

const app = express();

app.use(express.json()); // for parsing application/json

// Define your routes here
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error('Failed to get users:', error);
        res.status(500).json({ error: 'Failed to get users' });
    }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));