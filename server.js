const express = require('express')
const nunjucks = require('nunjucks')
const routes = require("./routes")

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))
server.use(express.static('img'))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoespace: false,
    noCache: true,
})


server.listen(4000, function() {
    console.log("server is running")
})