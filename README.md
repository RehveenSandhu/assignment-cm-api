# assignment-cm-api
This Node.js service trigger from Api gateway https call and save data to DynamoDb


endpoints:

  POST - https://dx6jp5ll8h.execute-api.us-east-1.amazonaws.com/dev/user

  GET - https://dx6jp5ll8h.execute-api.us-east-1.amazonaws.com/dev/customer

  GET - https://dx6jp5ll8h.execute-api.us-east-1.amazonaws.com/dev/customer/{id}

  DELETE - https://dx6jp5ll8h.execute-api.us-east-1.amazonaws.com/dev/customer/{id}


functions:

header:

Content-Type:application/Json

requestbody:

{
    "email":"string",
    "firstname": "string",
    "lastname": "string"
}

