const { valid } = require('joi');
const joi = require('joi');

const id = joi.number().integer();
const name = joi.string().alphanum().max(35);
const lastName = joi.string().alphanum().max(35);


const createCustomerSchema = joi.object({
  name: name.required(),
  lastName: lastName.required()
});

const updateCustomerSchema = joi.object({
  name: name,
  lastName: lastName
});

const getCustomerSchema = joi.object({
  id: id.required(),
});

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema }
