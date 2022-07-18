const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes')

const handlebars = [
    homeRoutes
]
router.use('/', handlebars)

router.use('/api', apiRoutes)

module.exports = router;