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
            sixBlogs
        })
    } catch (err) {
        console.log(err)
    }
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;
