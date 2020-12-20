const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routers')
const server = express()
const methodOverride = require('method-override')


server.use(express.urlencoded({ extended: true })) 

server.use(methodOverride('_method')) 

server.use(express.static('public'))

server.use(routes)
server.set("view engine", "njk")

nunjucks.configure("src/app/views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(8080, function() {
    console.log("Hacking the Planet!")
})
