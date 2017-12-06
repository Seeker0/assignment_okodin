'use strict';
var faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    let stats = {
      1: 'single',
      2: 'dating',
      3: 'married',
      4: 'divorced',
      5: 'complicated'
    };
    let hairs = {
      1: 'black',
      2: 'brown',
      3: 'blonde',
      4: 'bald',
      5: 'gray',
      6: 'red',
      7: 'other'
    };
    let eyes = {
      1: 'blue',
      2: 'brown',
      3: 'green',
      4: 'hazel',
      5: 'gray'
    };
    let builds = {
      1: 'fit',
      2: 'average',
      3: 'eh',
      4: 'overweight'
    };
    let numberMaker = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    let statusMaker = (obj, max) => {
      let num = numberMaker(1, max);
      return obj[num];
    };
    var profiles = [];
    for (let i = 0; i < 10; i++) {
      profiles.push({
        gender: i % 2 === 0 ? 'male' : 'female',
        age: numberMaker(18, 99),
        zipCode: faker.address.zipCode(),
        status: statusMaker(stats, 5),
        feet: numberMaker(3, 8),
        inches: numberMaker(1, 11),
        hair: statusMaker(hairs, 7),
        eye: statusMaker(eyes, 5),
        build: statusMaker(builds, 4),
        userId: `${i}`
      });
    }
    return queryInterface.bulkInsert('Profiles', profiles);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
