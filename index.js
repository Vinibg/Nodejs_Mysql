const express = require("express")
const app = express()
const handlebars =require("express-handlebars")
const bodyParser = require("body-parser")
const Post = require("./models/Post")

//Template engine
app.engine("handlebars",handlebars({defaultLayout:"main"}))
app.set("view engine","handlebars")

//Body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Rotas
app.get("/",function(req, res){
    Post.findAll({order: [["id","DESC"]]}).then(function(posts){
        res.render('home',{posts: posts})  
    })
})
app.get("/cadastro",function(req,res){
    res.render("formulario")
})
app.get("/deletar/:id",function(req, res){
    Post.destroy({where: {"id": req.params.id}}).then(function(){
        res.send("Registro:"+ req.params.id +" deletado com sucesso")
    }).catch(function(erro){
        res.send("Erro:" + erro)
    })
})

app.post("/send",function(req,res){
    Post.create({
        titulo : req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect("/")
    }).catch(function(erro){
        res.send(erro)
    })
})

app.listen(8081, function(){
    console.log("Rodando...")
})