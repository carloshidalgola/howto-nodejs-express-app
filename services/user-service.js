const boom = require('@hapi/boom');
const { rows } = require('pg/lib/defaults');
const getConnection = require('../libs/postgres')
const pool = require('../libs/postgres.pool');

class UserService {

  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  }

  async create(data) {
    return data;
  }

  async find() {
    const query = 'SELECT * FROM tasks';
    // const client = await getConnection();
    // const rsta = await client.query('SELECT * FROM tasks');
    // return (await rsta).rows;
    const rsta =  await this.pool.query(query);
    return rsta.rows;
  }

  async findOne(id) {
    return { id }
  }

  async update(id, changes) {
    return {
      id, changes
    }

  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
