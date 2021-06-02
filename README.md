# Mock PaymentAPI

Mock PaymentAPI is a mock of the behavior of a Transaction

## Installation

Install the node modules

```bash
npm install
```
Install Dependencies

```bash
npm install mongoose
npm install supertest
npm install mocha chai --save-dev
```

## Run

```
npm start
```


## Architecture and Design
This project consist of MVC architecture ,  scaffleout out through express generator , which consists express routes folder for the API calls , and Controllers folder which consist of the functions defined for those routes, Model folder consists the Mongoose schema for the data.   

The project consist of 2 endpoint API calls ,
First endpoint Post the JSON data of all the Payment information into the nosql database using the Payment schema Model,The JSON data can be sent to the API using the request body in the Postman which also consist the Buyer infomation , It validates the user with an OTP (5644) to allow the payment ,The API also checks if the method of the Payment is Boleto or Card , If the method is boleto it simply returns the boleto number. 

But if the method is Card ,API validates the card number from the database where a test card has already been stored into the database using Card model in Card.JS. If the card is validated API simply returns the message for the successful Transaction.

Second endpoint returns the JSON data of all the information regarding the payment, It returns the information by using the clientID provided into the request body.Here also it validates user with an OTP(5644) , and returns the status of the Payment

## Unit Testing
Testing of the project has been done using Mocha Chai and Supertest,
The folder test contains apitest.js ,It consist of function which do checks on the both the calls, 

One check is done to check the message , the Payment Status
Second check is done to check if the Payment done through 1st API call is successful or not , it also checks the property of the returned JSON data. 
```bash
npm run test
