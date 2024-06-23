const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/User')
const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://shezymemon0180:gu6c0Sok1EW8ZH3i@cluster0.wxeibnz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    try {
        const userDoc = await User.create({username, password})
        res.json(userDoc)
    } catch(e) {
        res.status(400).json(e)
    }
})

app.listen(4000)
