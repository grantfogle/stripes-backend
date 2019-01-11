
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('drills').del()
    .then(function () {
      // Inserts seed entries
      return knex('drills').insert([
        {
          name: 'Triangle Choke',
          skill_level: 'white',
          type: 'Submission',
          solo: false,
          reps: 10,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          name: 'Armbar',
          skill_level: 'white',
          type: 'Submission',
          solo: false,
          reps: 10,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          name: 'Rear Naked Choke',
          skill_level: 'white',
          type: 'Submission',
          solo: false,
          reps: 10,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          name: 'Americana',
          skill_level: 'white',
          type: 'Submission',
          solo: false,
          reps: 10,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          name: 'Kimura',
          skill_level: 'white',
          type: 'Submission',
          solo: false,
          reps: 10,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          name: 'Cross Collar',
          skill_level: 'white',
          type: 'Submission',
          solo: false,
          reps: 10,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          name: 'Arm Triangle',
          skill_level: 'white',
          type: 'Submission',
          solo: false,
          reps: 10,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          name: 'Pendulum Sweep',
          skill_level: 'white',
          type: 'Sweep/Escape',
          solo: false,
          reps: 10,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          name: 'Side Control Escape',
          skill_level: 'white',
          type: 'Sweep/Escape',
          solo: false,
          reps: 10,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      ]);
    });
};
