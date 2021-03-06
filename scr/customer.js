"use strict";

const AWS = require("aws-sdk");
const uuid = require("uuid");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.createCustomer = (event, context, callback) => {
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v4(),
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime()
    }
  };

//create customer
  dynamoDb.put(params, error => {
    if (error) {
      console.error(error);

      callback(null, {
        statusCode: error.statusCode || 501
      });
      return;
    }

    callback(null, {
      statusCode: 200,
      body: JSON.stringify(params.Item)
    });
  });
};

//get customer by id
module.exports.getCustomer = (event, context, callback) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: event.pathParameters.id
    }
  };


  dynamoDb.get(params, (error, result) => {
    if (error) {
      console.error(error);

      callback(null, {
        statusCode: error.statusCode || 501
      });
      return;
    }

    callback(null, {
      statusCode: 200,
      body: JSON.stringify(result.Item)
    });
  });
};


//Delete customer by id
module.exports.deleteCustomer = (event, context, callback) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: event.pathParameters.id
    }
  };

  dynamoDb.delete(params, error => {
    if (error) {
      console.error(error);

      callback(null, {
        statusCode: error.statusCode || 501
      });
      return;
    }

    callback(null, {
      statusCode: 200,
      body: JSON.stringify({})
    });
  });
};