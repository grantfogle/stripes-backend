
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
        },
        {
          name: 'Side Control Staple',
          skill_level: 'white',
          type: 'Side Control',
          solo: false,
          reps: 10,
          description: 'Staple legs with your leg, move to other side.'
        },
        {
          name: 'Side Control Hop Over',
          skill_level: 'white',
          type: 'Side Control',
          solo: false,
          reps: 10,
          description: 'Move from side control to other side.'
        },
        {
          name: 'Knee On Belly',
          skill_level: 'white',
          type: 'Side Control',
          solo: false,
          reps: 10,
          description: 'Move from side control, to knee on belly to other side control.'
        },
        {
          name: 'Shrimps',
          skill_level: 'white',
          type: 'Escape',
          solo: false,
          reps: 10,
          description: 'Place your foot behind you and pull your hips back. Keep your arm in.'
        },
        {
          name: 'Reverse Kese Gatame',
          skill_level: 'white',
          type: 'Side Control',
          solo: false,
          reps: 10,
          description: 'Get reverse kese gatame from side control, take control of arm and move into full mount.'
        },
        {
          name: 'Shrimps',
          skill_level: 'white',
          type: 'Escape',
          solo: false,
          reps: 10,
          description: 'Place your foot behind you and pull your hips back. Keep your arm in.'
        }
      ]);
    });
};
