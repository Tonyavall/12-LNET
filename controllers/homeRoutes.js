const { Blog, User } = require('../models');
const router = require('express').Router();

// Home related routes

router.get('/', async (req, res) => {
    try {
        const dbResponse = await Blog.findAll({
            limit: 6,
            include: [{ model: User }]
        })
        const sixBlogs = dbResponse.map(blog => {
            return blog.get({ plain: true })
        })
        res.render('home', {
            sixBlogs,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        console.log(err)
    }
});

router.get('/login', (req, res) => {
    res.render('login', {
        logged_in: req.session.logged_in
    });
});

router.get('/signup', (req, res) => {
    res.render('signup', {
        logged_in: req.session.logged_in
    });
});

module.exports = router;
