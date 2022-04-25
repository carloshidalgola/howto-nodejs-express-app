'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      //await Sequelize.query("insert into user (id, email, password, create_at, role) values ('1', 'carlos@mdp.com.pe','1231233', '2022-04-24 03:35:01.000000', 'customer')");
      // await queryInterface.bulkInsert('users', [{
      //   id: '1',
      //   email: 'example@example.com',
      //   password: '12333333',
      //   create_at: new Date(),
      //   role: 'customer'
      // }]);
      await queryInterface.bulkInsert('customers', [{
        id: '1',
        name: 'carlos',
        last_name: 'hidalgo',
        create_at: new Date(),
        phone: '123123123'
      }]);
  },

  async down (queryInterface, Sequelize) {
    //await queryInterface.query("delete from user where id=1");
  }
};
