const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels  = require('./../db/models/');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
//const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  //dialect: 'mysql',
  dialect: 'postgres',
  logging: true, //muestra en consola el comando en sql
})

setupModels(sequelize);
 //Comentamos esto porque no queremos con sequalize sincronice por defecto sino hacerlo por migrations
//sequelize.sync(); //Sincroniza las tablas (lee el modelo y crea tablas)

module.exports = sequelize;
