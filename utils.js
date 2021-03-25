'use strict';

module.exports = {
  generateRandomData
};

// Make sure to "npm install faker" first.
const Faker = require('faker');

function generateRandomData(userContext, events, done) {
  // generate data with Faker:
  const content = `${Faker.name.firstName()}`;

  const new_content = `new content ${Faker.name.firstName()}`;
  // add variables to virtual user's context:
  userContext.vars.content = content;
  userContext.vars.new_content = new_content;
  // continue with executing the scenario:
  return done();
}
 
