var { mergeTypes } = require( 'merge-graphql-schemas');
var clientType = require(  './clientType');
var productType = require(  './productType');

const types = [
  clientType,
  productType,
];
 
module.exports = mergeTypes(types, { all: true });