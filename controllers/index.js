const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require("./home-routes");

router.use('/api', apiRoutes);
router.use('/', homeRoutes);


//in case a equest is made to an endpoint that doesn' exist, an error code will be called
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;