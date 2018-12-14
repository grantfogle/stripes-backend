
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          user_name: 'jitsudude',
          email: 'jitsude@test.com',
          first_name: 'Brad',
          last_name: 'Bluebelt',
          password: 'password',
          belt_level: 'blue'
        },
        {
          user_name: 'guyjitsu',
          email: 'guyjitsu@test.com',
          first_name: 'Guy',
          last_name: 'Greenbelt',
          password: 'password1',
          belt_level: 'white'
        },
        {
          user_name: 'animalandrew',
          email: 'animalandrew@test.com',
          first_name: 'Andrew',
          last_name: 'Animal',
          password: 'password2',
          belt_level: 'blue'
        },
        {
          user_name: 'gary',
          email: 'gary@test.com',
          first_name: 'Gary',
          last_name: 'Evans',
          password: 'password',
          belt_level: 'black'
        },
        {
          user_name: 'youngjamie',
          email: 'jamie@test.com',
          first_name: 'Jamie',
          last_name: 'Juniper',
          password: 'password',
          belt_level: 'purple',
        }
      ]);
    });
};
