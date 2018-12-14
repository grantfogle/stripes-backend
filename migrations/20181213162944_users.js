
exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', (user) => {
        user.increments('id');
        user.string('user_name');
        user.string('email');
        user.string('first_name');
        user.string('last_name');
        user.string('password');
        user.string('belt_level');
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
