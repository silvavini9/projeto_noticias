var express = require ('express');

var app = express();

app.set('view engine', 'ejs');


app.get('/',function(req,res){
    res.render("home/index");
});

app.get('/cursos',function(req,res){
    res.render("secao/cursos");
});

app.get('/esportes',function(req,res){
    res.render("secao/esportes");
});

app.get('/pesquisa',function(req,res){
    res.render("secao/pesquisa");
});


app.listen(3000,function() {
    console.log("Servidor rodando com express")
})