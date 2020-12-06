const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

//in case a equest is made to an endpoint that doesn' exist, an error code will be called
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;