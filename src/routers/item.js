const express = require('express')
const Item = require('../models/item')

const router = new express.Router()

//create an item
router.post('/items',  async(req, res) => {
    try {
        const newItem = new Item(req.body)
        await newItem.save()
        res.status(201).send(newItem)
    } catch (error) {
        res.status(400).send({message: "error"})
    }
})


module.exports = router