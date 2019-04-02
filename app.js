var express = require ('express');//Pega toda a biblioteca do espress

var app = express();//Faz todos os methodos do express em uma unica variavel

app.set('view engine', 'ejs');//Define o tipo de motor de vizualização


app.get('/',function(req,res){//Pega o caminho da url
    res.render("home/index");//Renderiza a página que está na pasta view
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