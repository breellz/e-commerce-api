const express = require("express")
const Order = require("../models/order")
const Cart = require("../models/cart")
const User = require("../models/user")
const Auth = require("../middleware/auth")
const stripe = require('stripe')('sk_test_51K5oDhFyMddIu9oDIxWr4FhcaSElSU6IYZXfS04HH4YWz80STi6uJxe7lKrcThMKO3ZKysEVXbcSnuqJpkqRe4QW00ldfUU1v5');

const router = new express.Router()

//get orders

router.get('/orders', Auth, async (req, res) => {
    const owner = req.user._id;
    try {
        const order = await Order.find({ owner: owner }).sort({ date: -1 });
        res.status(200).send(order)
    } catch (error) {
        res.status(500).send()
    }
})

//checkout

module.exports = router
