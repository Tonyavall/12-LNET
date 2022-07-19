const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes')

const blogs = require('./blogs')
const profile = require('./profile')
const posts = require('./posts')

const handlebars = [
    homeRoutes,
    blogs,
    profile,
    posts
]
router.use('/', handlebars)

router.use('/api', apiRoutes)

module.exports = router;