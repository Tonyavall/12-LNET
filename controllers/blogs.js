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
        const hasComments = !!singleBlog.comments.length

        res.render('blogs', {
            singleBlog,
            hasComments,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;