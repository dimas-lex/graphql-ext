var express = require('express');
var graphqlHTTP = require('express-graphql');

var { express: voyagerMiddleware } = require('graphql-voyager/middleware');
 
var { buildSchema } = require('graphql');

var typeDefs = require('./types/index');
  
// Construct a schema, using GraphQL schema language
var schema = buildSchema(typeDefs); 

// The root provides a resolver function for each API endpoint
var root = {
  clients: () => {
    return [
      {
        id: 111,
        name: 'F1',
        age: 12,
        products: [{
          id: 500,
          description: 'someDesck',
          price: '10' 
        }]
      },
      {
        id: 222,
        name: 'F2',
        age: 22,
        products: [{
          id: 500,
          description: 'someDesck',
          price: '10' 
        }]
      }
    ];
  },
  products: () => {
    return [{
      id: 500,
      description: 'someDesck',
      price: '10' 
    }, {
      id: 501,
      description: 'someDesck 2',
      price: '20' 
    }]
  }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.use('/voyager', voyagerMiddleware({ endpointUrl: '/graphql' }));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');