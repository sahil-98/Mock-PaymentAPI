const expect = require("chai").expect;
const request = require("supertest");

const server = require("../app.js");
const app = request.agent(server);

describe("Get Request", function(){
    describe("Adding new get", function(){
        it("should return Transaction was Done" , function(){
            app
            .get("/api/getpaymentinfo")
            .send({
                "otp" : "5644",
                "client" : {
                    "id": "9258"
                }
            })
            .end((err , res) => {
                expect(res.body.responseBody.message).to.equal("Transaction was Done");
            });
        })
    })
})

describe("Post Request", function(){
    describe("Adding new post", function(){
        it("should return info" , function(){
            app
            .post("/api/payment")
            .send(
            {
                "otp" : "5644",
                "method": "card",
                "client": 
                {
                    "id": "9258"
                },
                "buyer": 
                {
                    "Name": "Sahil Kapoor",
                    "Email": "sahil@gmail.com",
                    "CPF" : "8899"
                },
                "Payment": 
                {
                    "Amount" : "400",
                    "Type" : "Card",
                    "Card": "credit"
                },
                "Card": 
                 {
                    "Name" : "Sahil Kapoor",
                    "Number": "232323",
                    "Expirationdate" : "24-04-2023",
                    "Cvv" : "888"
                }
            })
            .end((err , res) => {
                expect(res.body.UserInfo).to.contain.property('Name');
                expect(res.body.UserInfo).to.contain.property('Email');
                expect(res.body.UserInfo).to.contain.property('CPF');
                expect(res.body.message).to.equal("Payment is Succesfull");
            });
        })
    })
})