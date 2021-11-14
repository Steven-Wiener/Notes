console.log = function() {};
const { assert } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('app.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
        checkInventory(order)
        .then((resolvedValueArray) => {
          return processPayment(resolvedValueArray);
        })
        .then((resolvedValueArray) => {   
        })
        .then((successMessage) => {
          console.log(successMessage);
        })
        .catch((errorMessage) => {
          console.log(errorMessage);
        });             
    };

    let structureTwo = function() {
        checkInventory(order)
        .then((resolvedValueArray) => {
          return processPayment(resolvedValueArray);
        })
        .then((resolvedValueArray) => {
          return shipOrder(resolvedValueArray);
        })
        .then((successMessage) => {
          console.log(successMessage);
        })
        .catch((errorMessage) => {
          console.log(errorMessage);
        });
        
    };


    let isMatchOne = Structured.match(code, structureOne);
    let isMatchTwo = Structured.match(code, structureTwo);

    assert.isOk(isMatchOne || isMatchTwo, "Did you return `processPayment(resolvedValueArray)` in the first `.then()`'s success handler?");
  });
});