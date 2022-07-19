const { Blog } = require('../models');
const loggedIn = require('../utils/auth');

const router = require('express').Router();

router.get('/posts', loggedIn, async (req, res) => {
    try {
        const dbResponse = await Blog.findAll({
            where: { user_id: req.session.user_id }
        })
        const userPosts = dbResponse.map(post=> post.get({ plain: true }))

        res.render('posts', {
            logged_in: req.session.logged_in,
            userPosts
        })
    } catch (error) {
        console.log(error)
    }
})

// router.get('/posts/create', loggedIn, async (req, res) => {
//     try {
//         const dbResponse = await Blog.findAll({
//             where: {user_id: req.session.user_id}
//         })
//         const userBlogs = dbResponse.get({ plain: true })

//         res.render('profile', {
//             logged_in: req.session.logged_in,
//             userBlogs
//         })
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })

module.exports = router;