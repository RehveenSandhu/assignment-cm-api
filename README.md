# assignment-cm-api
This Node.js service trigger from Api gateway https call and save data to DynamoDb

function:
createUser: assignment-cm-api-dev-createUser
endpoints
  POST - https://dx6jp5ll8h.execute-api.us-east-1.amazonaws.com/dev/user

header:
Content-Type:application/Json

requestbody:
{
    "email":"string",
    "firstname": "string",
    "lastname": "string"
}