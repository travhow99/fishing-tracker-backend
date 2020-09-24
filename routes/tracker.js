const router = require('express').Router();
const Fish = require('../models/Fish');

router.route('/').get((req, res) => {
    Fish.find()
        .then((_fish) => res.json(_fish))
        .catch((err) => res.status(400).json(`Error ${err}`));
});

module.exports = router;