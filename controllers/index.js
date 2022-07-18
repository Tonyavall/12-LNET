const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes')

const blogs = require('./blogs')

const handlebars = [
    homeRoutes,
    blogs
]
router.use('/', handlebars)

router.use('/api', apiRoutes)

module.exports = router;