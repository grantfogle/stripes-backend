const database = require('./database-connection')

module.exports = {
    listAll() {
        return database('drills');
    },
    getAllUsers() {
        return database('users');
    },
    getById(id) {
        return database('drills').where('id', id);
    },
    createDrill(newDrill) {
        return database('drills').insert(newDrill).returning('*');
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
    },
    createUser(newUser) {
        return database('users').insert(newUser).returning('*');
    },
    getUser(username) {
        return database('users').where('user_name', username);
    }
}