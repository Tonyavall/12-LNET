const { Blog, Comment, User } = require('../models');

const router = require('express').Router();

router.get('/blogs/:id', async (req, res) => {
    try {
        const dbResBlog = await Blog.findByPk(req.params.id, {
            include: [
                { model: User },
                { model: Comment, include: ['user'] }
            ],
        })
        const singleBlog = dbResBlog.get({ plain: true })
        res.render('blogs', {
            singleBlog,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;