const database = require('./database-connection')

module.exports = {
    listAll() {
        return database('drills')
    },
    getById(id) {
        return database('drills').where('id', id)
    },
    createDrill(newDrill) {
        return database('drills').insert(newDrill).returning('*')
    },
    deleteDrill(id) {
        return database('drills')
            .where('id', id)
            .delete();
    },
    updateDrill(id, drill) {
        return database('drills')
            .where('id', id)
            .update(drill)
    }
}