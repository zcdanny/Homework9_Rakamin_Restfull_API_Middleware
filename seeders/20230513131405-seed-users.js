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
    return queryInterface.bulkInsert('Users', [
      {
        email: 'ramanda@gmail.com',
        gender: 'Male',
        password: '$2a$12$4/AHExR2pyPr3nJyMBcKBefd/CuA/J1V9BllZafGJHz8bCc0Va1uK',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'raihani',
        gender: 'Female',
        password: '$2a$12$4/AHExR2pyPr3nJyMBcKBefd/CuA/J1V9BllZafGJHz8bCc0Va1uK',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'Nia',
        gender: 'Female',
        password: '$2a$12$4/AHExR2pyPr3nJyMBcKBefd/CuA/J1V9BllZafGJHz8bCc0Va1uK',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'Paijo',
        gender: 'Male',
        password: '$2a$12$4/AHExR2pyPr3nJyMBcKBefd/CuA/J1V9BllZafGJHz8bCc0Va1uK',
        role: 'admin',
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
