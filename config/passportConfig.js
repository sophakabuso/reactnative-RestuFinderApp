const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./db/User');

passport.use(new LocalStrategy(
    async function(username, password, done) {
        try {
            const user = await User.findOne({ where: { username: username } });
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        } catch (error) {
            return done(error);
        }
    }
));

app.use(passport.initialize());