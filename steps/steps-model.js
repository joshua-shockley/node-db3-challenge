const db = require('../data/schemes-config.js');

module.exports = {
    findAllSteps
}

function findAllSteps() {
    return db('steps');
}