const express = require('express');

const Steps = require('./steps-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Steps.findAllSteps()
        .then(steps => {
            res.status(200).json(steps);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});


module.exports = router;