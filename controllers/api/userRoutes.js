const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');
const loggedIn = require('../../utils/auth');

//end point of /api/User routes

router.get('/', async (req, res) => {
    try {
        const UserData = await User.findAll({
            include: [{ all: true, nested: true }],
        });
        res.status(200).json(UserData);
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const userById = await User.findByPk(req.params.id, {
            include: [{ all: true, nested: true }],
        });
        if (!userById) {
            return res.status(404).json({
                message: 'This user ID does not exist. Please enter a valid user ID!',
            });
        }
        res.status(200).json(userById);
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const createUser = await User.create({
            username: req.body.username,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
        });
        res.json('Success')
    } catch (err) {
        const [error] = err.errors.map(error => {
            return {
                message: error.message,
                key: error.validatorKey,
                args: error.validatorArgs,
            }
        })

        switch (error.key) {
            case 'len':
                const [num] = error.args
                res.status(400).json(`Password must be ${num} or more characters.`)
                break;
            case 'not_unique':
                const message = (error.message && error.message[0].toUpperCase() + error.message.slice(1) + '.') || ''
                res.status(400).json(message)
                break;
            case 'isEmail':
                res.status(400).json('Please enter a valid email.')
                break;
            default:
                res.status(400).json('Unable to post user data. ')
        }
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleteUser = await User.destroy({
            where: { user_id: req.params.id },
        });
        if (!deleteUser) {
            return res.status(404).json({
                message: 'This user ID does not exist. Please enter a valid user ID!',
            });
        }
        res.status(200).json(deleteUser);
    } catch (err) {
        return res.status(500).json(err);
    }
});

// backend for logging in
router.post('/login', async (req, res) => {
    try {
        // Find the user who matches the posted e-mail address
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Email is not registered.' });
            return;
        }
        console.log(req.body.password, userData.password)
        // Verify the posted password with the password store in the database
        const validPassword = await bcrypt.compare(
            req.body.password,
            userData.password
        );

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }
        req.session.save(() => {

            req.session.user_id = userData.user_id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
