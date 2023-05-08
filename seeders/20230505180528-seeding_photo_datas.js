'use strict';

const data = [
  {
    title: 'Photo 1',
    caption: 'ini photo 1',
    image_url: 'photo-1.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
   {
    title: 'Photo 2',
    caption: 'ini photo 2',
    image_url: 'photo-1.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
   {
    title: 'Photo 3',
    caption: 'ini photo 3',
    image_url: 'photo-1.com',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

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
   await queryInterface.bulkInsert('Photos', data, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Photos', null, {})
  }
};
