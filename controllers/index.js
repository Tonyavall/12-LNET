const router = require('express').Router();

const apiRoutes = require('./api');


// const handlebars = [

// ]
// router.use('/', handlebars)

router.use('/api', apiRoutes)

module.exports = router;