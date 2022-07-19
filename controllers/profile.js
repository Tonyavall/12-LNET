const { User } = require('../models');
const loggedIn = require('../utils/auth');

const router = require('express').Router();

router.get('/profile', loggedIn, async (req, res) => {
    try {
        const dbResponse = await User.findByPk(req.session.user_id, {
            include: [{ all: true, nested: true }],
        })
        const user = dbResponse.get({ plain: true })

        res.render('profile', {
            logged_in: req.session.logged_in,
            user
        })
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router;