const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res)=> {
  // const { limit, offset } = req.query;
  // if(limit && offset){
  //   res.json({
  //     limit,
  //     offset
  //   });
  // } else
  // {
  //   res.send('no hay parametros');
  // }
  res.json(getUsers(10));
});

const getUsers =  function (limit){
  const users = [];
  for (let index = 0; index < limit; index++) {
    users.push({
      name: faker.name.findName(),
      email: faker.internet.email()
    });
  }

  return users;
}

module.exports = router;
