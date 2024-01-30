const express = require('express')

const app = express()
const PORT = 5000

const fs = require('fs');
const user = JSON.parse(fs.readFileSync('user.json', 'utf8'));

app.get('/', (req,res) => {
    res.send('start')
})

app.get('/user', (req,res) => {
    res.json(user)
})

app.get('/user/:name', (req,res) =>{
    const name = req.params.name
    user.find(data => {
        if(data.name === name) res.send(data)
    })

})

