const router = require('express').Router();
const { Blog, User, Comment } = require('../../models')

router.get('/', async (req, res) => {
    try {
        const dbResponse = await Blog.findAll({
            include: all,
            nested: true
        })
        const allBlogs = dbResponse.map(blog => blog.get({ plain: true }))

        res.status(200).json(allBlogs)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const dbResponse = await Blog.findByPk(req.params.id, {
            include: [{ model: User, model: Comment }]
        })
        const blog = dbResponse.get({ plain: true })

        res.status(200).json(blog)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const dbResponse = await Blog.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.body.user_id,
            date_created: req.body.date_created
        })
        res.status(200).json(dbResponse)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const dbResponse = await Blog.destroy({
            where: { blog_id: req.params.id }
        })
        if (!dbResponse) {
            return res.status(400).json({
                message: 'Blog id does not exist.'
            })
        }
        res.status(200).json(dbResponse)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;