const { Blog, User } = require('../models');
const loggedIn = require('../utils/auth');

const router = require('express').Router();

router.get('/posts', loggedIn, async (req, res) => {
    try {
        const dbResponse = await Blog.findAll({
            where: { user_id: req.session.user_id }
        })
        const userPosts = dbResponse.map(post => post.get({ plain: true }))
        const hasPosts = userPosts.length > 0 ? true : false

        res.render('posts', {
            logged_in: req.session.logged_in,
            userPosts,
            hasPosts
        })
    } catch (error) {
        res.status(400).json(error)
    }
})

router.delete('/posts', loggedIn, async (req, res) => {
    try {
        const dbResBlog = await Blog.findByPk(req.body.postId)
        const { user_id } = dbResBlog.get({ plain: true })

        if (user_id !== req.session.user_id) 
            return res.status(401).json('Unauthorized');

        await dbResBlog.destroy()
        res.status(200).json('Success')
    } catch (error) {
        res.status(400).json(error)
    }
})

router.get('/posts/create', loggedIn, async (req, res) => {
    try {
        res.render('createBlog', {
            logged_in: req.session.logged_in,
        })
    } catch (error) {
        res.status(400).json(error)
    }
})

router.post('/posts/create', loggedIn, async (req, res) => {
    try {
        console.log(req.body.content)
        const dbResponse = await Blog.create({
            title: req.body.title,
            description: req.body.description,
            content: req.body.content,
            user_id: req.session.user_id,
            date_created: req.body.dateCreated
        })
        if (!dbResponse) {
            return res.status(400).json('Unable to post')
        }
        const newBlog = dbResponse.get({ plain: true })
        res.status(200).json(newBlog.blog_id)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router;