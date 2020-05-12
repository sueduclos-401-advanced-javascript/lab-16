'use strict';

const globalEmitter = require('./lib/events.js');
const faker = require('faker');

const deliveryHandler = (payload) => {
  console.log('VENDOR says: "Thank you for delivering order"', payload.orderNumber);
};

// attach handlers with listeners
globalEmitter.on('Order delivered', deliveryHandler);

// raise/emit events
setInterval(() => {
  let customer = {
    time: faker.date.future(),
    store: faker.company.companyName(),
    orderNumber:faker.random.number(),
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    address: faker.address.streetAddress() + ' ' + faker.address.secondaryAddress(),
  };
  globalEmitter.emit('pickup',customer);
}, 5000);

module.exports = deliveryHandler;
