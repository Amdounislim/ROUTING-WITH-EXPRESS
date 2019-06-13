const express = require('express')
const hbs = require('hbs')

const app = express()

app.set('view engine', hbs)

app.use(date = ( req, res, next) =>{
    let requestAt = new Date().getHours()
    console.log(requestAt)
    if (requestAt>8 || requestAt<=17) res.send('Our office is not open now')
    next()
})

app.get('/home', (req, res) => {
    res.render('home.hbs', {name : "Slim"})
})

app.get('/contact', (req, res) => {
    res.render('contact.hbs', {name : "Slim"})
})

app.get('/ourservices', (req, res) => {
    res.render('ourservices.hbs', {name : "Slim"})
})

app.listen(3000, (err) => {
    if(err) console.log("server is not running")
    else console.log("server is running on port 3000")
})