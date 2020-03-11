'use strict';

const faker = require("faker");

let posts = [];

for(let i = 1; i < 10; i++) {
  posts.push({
    title: faker.hacker.noun(),
    name: "Anonymous " + Math.floor(Math.random() * 1000000000),
    body: faker.hacker.phrase(),
    createdAt: new Date(),
    updatedAt: new Date()
  });
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("Posts", posts, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Posts", null, {});
  }
};
