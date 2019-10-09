const db = require('../data/schemes-config.js');

module.exports = {
    find,
    add,
    findById,
    findSteps,
    update,
    remove
}

function find() {
    return db('schemes');
}

function add(scheme) {
    return db('schemes')
        .insert(scheme, 'id')
        .then(([id]) => {
            return findById(id)
        });
}


function findById(id) {
    return db('schemes')
        .where({ id })
        .first()
}

function update(changes, id) {
    return db('schemes')
        .update(changes)
        .where('id', id)
        .then(() => {
            return findById(id);
        });
}

function findSteps(id) {
    return db('steps as stp')
        .join('schemes as s', 's.id', '=', 'stp.scheme_id')
        .select('stp.id', 's.scheme_name', 'stp.step_number', 'stp.instructions')
        .orderBy('stp.step_number')
        .where({ scheme_id: id })

}

function remove(id) {
    return db('schemes')
        .where({ id })
        .del()
}