'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Movies', [
      {
        title: 'SI PITUNG',
        genre: 'Sci-Fi',
        year: '2022',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Maling Kundnag',
        genre: 'Sci-Fi',
        year: '2011',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The fire',
        genre: 'Sci-Fi',
        year: '2007',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The pitu',
        genre: 'Sci-Fi',
        year: '2020',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
