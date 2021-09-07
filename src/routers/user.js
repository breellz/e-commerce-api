const express = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/user')

const router = new express.Router()

//signup
router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }

})

//login

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)

        res.send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router