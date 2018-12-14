
exports.up = function (knex, Promise) {
    return knex.schema.createTable('drills', (drill) => {
        drill.increments('id');
        drill.string('name');
        drill.string('skill_level');;
        drill.string('type');
        drill.boolean('solo');
        drill.integer('reps');
        drill.string('description');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('drills');
};
