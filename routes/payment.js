var express = require('express');
var router = express.Router();
const {payment} = require("../controllers/payment");
const {paymentinfo} = require("../controllers/paymentinfo");
const {testcard} = require("../controllers/testcards");

router.post('/payment', payment);

router.get('/getpaymentinfo', paymentinfo);

router.post('/testcards', testcard);

module.exports = router;

 