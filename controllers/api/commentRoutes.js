const router = require('express').Router();
const { Comment, User, Blog } = require('../../models')

router.get('/', async (req, res) => {
    try {
        const dbResponse = await Comment.findAll({
            include: [{ model: User }]
        })
        const allComments = dbResponse.map(comment => comment.get({ plain: true }))

        res.status(200).json(allComments)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const dbResponse = await Comment.findByPk(req.params.id, {
            include: [{ model: User, model: Blog }]
        })
        const comment = dbResponse.get({ plain: true })

        res.status(200).json(comment)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const dbResponse = await Comment.create({
            content: req.body.content,
            user_id: req.body.user_id,
            blog_id: req.body.blog_id,
            date_created: req.body.date_created
        })
        res.status(200).json(dbResponse)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const dbResponse = await Comment.destroy({
            where: { comment_id: req.params.id }
        })
        if (!dbResponse) {
            return res.status(400).json({
                message: 'Cart id does not exist.'
            })
        }
        res.status(200).json(dbResponse)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;