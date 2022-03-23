"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "redha",
        profession: "Admin Micro",
        role: "admin",
        email: "redha@gmail.com",
        password: await bcrypt.hash("12345678", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "alfath",
        profession: "Front-end Developer",
        role: "student",
        email: "alfath@gmail.com",
        password: await bcrypt.hash("12345678", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
