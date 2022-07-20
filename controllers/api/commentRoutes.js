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
        if (req.session.user_id === null) return res.status(401).json('Need to be logged in.')
        const dbResponse = await Comment.create({
            content: req.body.content,
            user_id: req.session.user_id,
            blog_id: req.body.blogId,
            date_created: req.body.dateCreated
        })
        res.status(200).json(dbResponse)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.delete('/', async (req, res) => {
    try {
        const userComment = await Comment.findByPk(req.body.commentId, {
            include: [{ all: true, nested: true }]
        })
        if (req.session.user_id !== userComment.user_id) {
            return res.status(401).json('Invalid Auth')
        }
        const dbResponse = await userComment.destroy()
        if (!dbResponse) {
            return res.status(400).json({
                message: 'Comment id does not exist.'
            })
        }
        res.status(200).json(dbResponse)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;