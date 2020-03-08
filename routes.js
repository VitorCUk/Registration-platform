const express = require('express')
const routes = express.Router()



routes.get('/', function(req, res) {
    return res.redirect("/teachers")
})

routes.get('/teachers', function(req, res) {
    return res.render("teachers/index")
})

routes.get('/teachers/create', function(req, res) {
    return res.render("teachers/create")
})

/* rota para enviar o formulario mas com o atributo POST */

routes.post("/teachers", function(req, res) {
    return res.send(req.body)


})

routes.get('/members', function(req, res) {
    return res.send("members")
})


module.exports = routes